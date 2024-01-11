import axiosClient from "./axiosClient";

class MessageAPI {
  getMessage = (customerID) => {
    const url = `Chat/get-messages/${customerID}`;
    return axiosClient.get(url);
  };

  sendMessage = (customerID, content, media, isCustomerSend) => {
    const url = "Chat/send-message";
    return axiosClient.post(url, {
      customerID,
      content,
      media: media ? media : "",
      isCustomerSend,
    });
  };
  getAllRoom = () => {
    const url = `Chat/get-all-rooms`;
    return axiosClient.get(url);
  };
}

const messageAPI = new MessageAPI();
export default messageAPI;
