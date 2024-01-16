import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import UserMessageItem from "../../components/UserMessageItem";
import { ExitMessageIcon, NoChatMessageIcon } from "../../components/Icons";
import { useEffect, useMemo, useRef, useState } from "react";
import CurrentUserItem from "../../components/CurrentUserItem";
import camera from "../../images/Camera.png";
import send from "../../images/EmailSend.png";
import MessageSearchBar from "../../components/SearchBar/MessageSearchBar";
import messageAPI from "../../api/messageAPI";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Helper } from "../../utils/helper";

const cx = classNames.bind(styles);

function Message() {
  const textareaRef = useRef();
  const messageEndRef = useRef(null);
  const [userList, setUserList] = useState([]);
  const [customerID, setCustomerID] = useState("");
  const [messages, setMessages] = useState("");
  const [file, setFile] = useState(null);
  const [connection, setConnection] = useState(null);

  const [isShow, setIsShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState([]);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (messageEndRef) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await messageAPI.getAllRoom().then((response) => {
          setUserList(response);
        });
        console.log("Success: ", response);
      } catch (error) {
        console.log("Xảy ra lỗi: ", error);
      }
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:7030/chathub")
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("SignalR connected");
          connection.on("ReceiveMessage", async (message) => {
            console.log("message:", message);

            if (message.media) {
              message.media = await ("data:image/png;base64," + message.media);
              setFile(null);
            }

            setConversation((prev) => [...prev, message]);
          });
        })
        .catch((error) => {
          console.error("Error starting SignalR connection:", error);
        });
      // connection.invoke('Connect', user.id)
    }
  }, [connection]);

  const showMessage = async (user) => {
    setIsShow(true);
    const activeUser = userList.filter((item) => item.customer.id === user.id);
    setCurrentMessage(activeUser || []);

    return await messageAPI
      .getMessage(user.id)
      .then((res) => {
        setConversation(res);
        setCustomerID(user.id);
      })
      .catch((error) => console.log(error));
  };

  const HandleSendMessage = async () => {
    console.log("gửi: ", file);
    return await messageAPI
      .sendMessage(customerID, messages, file, false)
      .then(() => {
        textareaRef.current.focus();
        setMessages("");
      })
      .catch((error) => console.log(error));
  };

  const HandleSendImage = async (event) => {
    if (event.target.files[0] && Helper.validateFile(event.target.files[0])) {
      const base64Image = await Helper.readAsBase64(event.target.files[0]);
      setFile(base64Image.substring("data:image/png;base64,".length));
    }
  };

  const closeMessage = () => {
    setIsShow(false);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("chat-list-container")}>
        <MessageSearchBar placeholder="Tìm kiếm ai đó ..." />

        <p className={cx("title")}>Tin nhắn</p>

        <div className={cx("user-list")}>
          {userList.map((user, key) => {
            return (
              <UserMessageItem
                data={user.customer}
                key={user.roomID}
                onClick={() => showMessage(user.customer)}
                isActive={
                  Object.keys(currentMessage).length === 0
                    ? false
                    : user.customer.id === currentMessage[0].customerID
                    ? true
                    : false
                }
              />
            );
          })}
        </div>
      </div>
      {isShow ? (
        <div className={cx("message-content-container")}>
          <div className={cx("message-header")}>
            <CurrentUserItem data={currentMessage[0].customer} />;
            <div className={cx("exit-btn")} onClick={closeMessage}>
              <ExitMessageIcon />
            </div>
          </div>
          <div className={cx("message-content")}>
            {conversation.map((message) => {
              console.log("media: ", message.media);
              {
                /* return (
                <div
                  className={message.isCustomerSend ? cx("other") : cx("owner")}
                >
                  {message.media && message.media !== "string" && (
                    <div className={cx("image-wrapper")}>
                      <img
                        src={message.media}
                        className={cx("image")}
                        alt="message"
                      />
                    </div>
                  )}
                  {message.content && (
                    <div className={cx("text-wrapper")}>{message.content}</div>
                  )}
                </div>
              ); */
              }
              if (message.media && message.media !== "string") {
                return (
                  <div
                    className={
                      message.isCustomerSend ? cx("other") : cx("owner")
                    }
                  >
                    <div className={cx("image-wrapper")}>
                      <img
                        src={message.media}
                        className={cx("image")}
                        alt="message"
                      />
                    </div>
                  </div>
                );
              } else if (message.content) {
                return (
                  <div
                    className={
                      message.isCustomerSend ? cx("other") : cx("owner")
                    }
                  >
                    <div className={cx("text-wrapper")}>{message.content}</div>
                  </div>
                );
              }
            })}
            <div ref={messageEndRef}></div>
          </div>
          <div className={cx("message-input")}>
            <div className={cx("photo-button")}>
              <input
                type="file"
                id="file"
                className={cx("input-file")}
                onChange={HandleSendImage}
              />
              <label htmlFor="file" className={cx("camera-icon")}>
                <img src={camera} alt="camera" />
              </label>
            </div>
            <div className={cx("input-content")}>
              <input
                type="text"
                placeholder="Aa"
                onChange={(e) => setMessages(e.target.value)}
                value={messages}
                ref={textareaRef}
              />
              <img
                src={send}
                alt="send-message"
                className={cx("send-button")}
                onClick={HandleSendMessage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={cx("no-message-content-container")}>
          <div className={cx("no-chat-message-notification")}>
            <NoChatMessageIcon />
            <span className={cx("notification-text")}>
              Chưa có đoạn hội thoại nào hiển thị
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
