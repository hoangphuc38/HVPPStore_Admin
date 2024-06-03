import classNames from "classnames/bind";
import {
  AddImageIcon,
  BackIcon,
  BackMobileIcon,
  NextIcon,
  NextMobileIcon,
} from "../../components/Icons";
import Button from "../../components/Button";
import styles from "./ProductAddNew.module.scss";
import { useState } from "react";
import defaultImage from "../../images/default-image.jpg";
import productAPI from "../../api/productAPI";
import { useNavigate } from "react-router-dom";
import { Helper } from "../../utils/helper";

const cx = classNames.bind(styles);

function ProductAddNew() {
  const optionSeasons = [
    "1988/1989",
    "1995/1996",
    "1998/1999",
    "2000/2001",
    "2004/2005",
    "2006/2007",
    "2009/2010",
  ];

  const navigate = useNavigate();
  const NUM_OF_IMAGES = 4;
  const [productImages, setProductImages] = useState(["", "", "", ""]);
  const [mainImage, setMainImage] = useState("");
  const [index, setIndex] = useState(0);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [name, setName] = useState("");
  const [club, setClub] = useState("");
  const [nation, setNation] = useState("");
  const [season, setSeason] = useState("");
  const [price, setPrice] = useState(0);
  const [sizeS, setSizeS] = useState(0);
  const [sizeM, setSizeM] = useState(0);
  const [sizeL, setSizeL] = useState(0);
  const [sizeXL, setSizeXL] = useState(0);
  const [description, setDescription] = useState("");
  const [urlMain, setUrlMain] = useState(null);
  const [urlSub1, setUrlSub1] = useState("");
  const [urlSub2, setUrlSub2] = useState("");
  const [urlThumb, setUrlThumb] = useState("");

  const HandleNextImage = () => {
    console.log("anh hien tai: ", mainImage);
    if (index < NUM_OF_IMAGES - 1) {
      setIndex(index + 1);
      setMainImage(productImages[index + 1]);
    } else {
      setIndex(0);
      setMainImage(productImages[0]);
    }
  };

  const HandleBackImage = () => {
    if (index > 0) {
      setIndex(index - 1);
      setMainImage(productImages[index - 1]);
    } else {
      setIndex(NUM_OF_IMAGES - 1);
      setMainImage(productImages[NUM_OF_IMAGES - 1]);
    }
  };

  const onChangeImage = async (event) => {
    if (event.target.files[0] && Helper.validateFile(event.target.files[0])) {
      const base64Image = await Helper.readAsBase64(event.target.files[0]);
      setMainImage(URL.createObjectURL(event.target.files[0]));
      console.log("link image: ", event.target.files[0].name);
      let imagesCopy = [...productImages];
      imagesCopy[index] = URL.createObjectURL(event.target.files[0]);

      const regex = /^data:image\/(png|jpeg|gif|bmp|webp);base64,/;
      const matches = base64Image.match(regex);

      if (!matches) {
        console.log("Unsupported image format");
        return;
      }

      // Extract the prefix length dynamically
      const prefixLength = matches[0].length;
      const imageData = base64Image.substring(prefixLength);

      if (index === 0) {
        setUrlMain(imageData);
      } else if (index === 1) {
        setUrlSub1(imageData);
      } else if (index === 2) {
        setUrlSub2(imageData);
      } else {
        setUrlThumb(imageData);
      }

      setProductImages(imagesCopy);
    }
  };

  const HandleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const HandleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    return await productAPI
      .addProduct(
        name,
        club,
        nation,
        season,
        price,
        sizeS,
        sizeM,
        sizeL,
        sizeXL,
        description,
        urlMain,
        urlSub1,
        urlSub2,
        urlThumb
      )
      .then(() => {
        alert("Thêm sản phẩm thành công");
        navigate("/product");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className={cx("container")} onSubmit={HandleSubmit}>
      <div className={cx("image-function")}>
        <div className={cx("image-buttons")}>
          <div className={cx("circle-back")} onClick={HandleBackImage}>
            <BackIcon width={30} height={30} />
          </div>
          <div onClick={HandleBackImage}>
            <NextMobileIcon
              width={35}
              height={35}
              className={cx("circle-next-mobile")}
            />
          </div>

          <div className={cx("image-product")}>
            <img
              src={mainImage !== "" ? mainImage : defaultImage}
              alt="product-thumb"
              className={cx("product-thumb")}
            />

            <div className={cx("add-image-btn")}>
              <input
                type="file"
                id="file"
                className={cx("image-upload")}
                onChange={onChangeImage}
              />
              <label htmlFor="file" className={cx("image-icon")}>
                <AddImageIcon width={30} height={30} />
              </label>
            </div>

            <div className={cx("add-image-btn-mobile")}>
              <input
                type="file"
                id="file"
                className={cx("image-upload")}
                onChange={onChangeImage}
              />
              <label htmlFor="file" className={cx("image-icon")}>
                <AddImageIcon width={23} height={23} />
              </label>
            </div>
          </div>

          <div className={cx("circle-next")} onClick={HandleNextImage}>
            <NextIcon width={30} height={30} />
          </div>
          <div onClick={HandleNextImage}>
            <BackMobileIcon
              width={35}
              height={35}
              className={cx("circle-back-mobile")}
            />
          </div>
        </div>
        <div className={cx("num-of-image")}>
          {productImages.map((image, curIndex) => {
            return (
              <div
                className={
                  curIndex === index ? cx("circle-active") : cx("circle")
                }
              ></div>
            );
          })}
        </div>
        <div className={cx("buttons")}>
          <Button className={cx("button-size")} red>
            Xóa ảnh
          </Button>
          <Button className={cx("button-size")} primary>
            Lưu ảnh
          </Button>
        </div>
      </div>

      <div className={cx("information")}>
        <div className={cx("name-product")}>
          <p>Tên sản phẩm</p>
          <input
            className={cx("name-input")}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className={cx("name-product")}>
          <p>Câu lạc bộ</p>
          <input
            className={cx("name-input")}
            type="text"
            placeholder="Nếu là đội tuyển quốc gia thì để trống"
            onChange={(e) => setClub(e.target.value)}
            value={club}
          />
        </div>

        <div className={cx("name-product")}>
          <p>Quốc gia</p>
          <input
            className={cx("name-input")}
            type="text"
            placeholder="Nếu là câu lạc bộ thì để trống"
            onChange={(e) => setNation(e.target.value)}
            value={nation}
          />
        </div>

        <div className={cx("price-product")}>
          <p>Mùa giải</p>
          <input
            className={cx("price-input")}
            type="text"
            placeholder="VD. 2003/2004"
            onChange={(e) => setSeason(e.target.value)}
            value={season}
          />
        </div>

        <div className={cx("price-product")}>
          <p>Giá sản phẩm</p>
          <input
            className={cx("price-input")}
            type="text"
            placeholder="VND"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <div className={cx("size-product")}>
          <p>Kích cỡ</p>
          <div className={cx("first-line")}>
            <div className={cx("size-quantity")}>
              <p>Size S</p>
              <input
                className={cx("size-input")}
                type="text"
                onChange={(e) => setSizeS(e.target.value)}
                value={sizeS}
              />
            </div>

            <div className={cx("size-quantity")}>
              <p>Size M</p>
              <input
                className={cx("size-input")}
                type="text"
                onChange={(e) => setSizeM(e.target.value)}
                value={sizeM}
              />
            </div>
          </div>

          <div className={cx("second-line")}>
            <div className={cx("size-quantity")}>
              <p>Size L</p>
              <input
                className={cx("size-input")}
                type="text"
                onChange={(e) => setSizeL(e.target.value)}
                value={sizeL}
              />
            </div>

            <div className={cx("size-quantity")}>
              <p>Size XL</p>
              <input
                className={cx("size-input")}
                type="text"
                onChange={(e) => setSizeXL(e.target.value)}
                value={sizeXL}
              />
            </div>
          </div>
        </div>

        <div className={cx("info-product")}>
          <p>Thông tin sản phẩm</p>
          <textarea
            type="text"
            className={cx("info-input")}
            cols="40"
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div className={cx("save-cancel-buttons")}>
          <Button className={cx("cancel-button")} red>
            Hủy
          </Button>
          <Button className={cx("cancel-button")} primary type="submit">
            Lưu
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ProductAddNew;
