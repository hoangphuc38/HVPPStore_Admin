import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import {
  AddImageIcon,
  BackIcon,
  BackMobileIcon,
  EditIcon,
  NextIcon,
  NextMobileIcon,
} from "../../components/Icons";
import Button from "../../components/Button";
import SizeButton from "../../components/SizeButton";
import { useContext, useEffect, useState } from "react";
import EditQuantitySizeForm from "../../components/EditQuantitySizeForm";
import { useParams } from "react-router-dom";
import productAPI from "../../api/productAPI";
import defaultImage from "../../images/default-image.jpg";
import { useNavigate } from "react-router-dom";
import { Helper } from "../../utils/helper";
import { ProductContext } from "../../contexts/productContext";

const cx = classNames.bind(styles);

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const { productSizes, setProductSizes } = useContext(ProductContext);

  const NUM_OF_IMAGES = 4;
  const [productDetail, setProductDetail] = useState({});
  const [productImages, setProductImages] = useState([]);

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

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await productAPI.getDetailProduct(params);
        console.log("ID product: ", params.id);
        console.log("Success: ", response);
        setProductDetail(response);

        setName(response.name);
        setClub(response.club);
        setNation(response.nation);
        setSeason(response.season);
        setPrice(response.price);
        setSizeS(response.sizeS);
        setSizeM(response.sizeM);
        setSizeL(response.sizeL);
        setSizeXL(response.sizeXL);
        setDescription(response.description);
        setUrlMain(response.urlMain);
        setUrlSub1(response.urlSub1);
        setUrlSub2(response.urlSub2);
        setUrlThumb(response.urlThumb);

        //Get list Images
        let imageList = [
          response.urlMain,
          response.urlSub1,
          response.urlSub2,
          response.urlThumb,
        ];
        setProductImages(imageList);
        setMainImage(imageList[0]);

        //Get list of Size
        let productSize = [
          {
            size: "S",
            quantity: response.sizeS,
          },
          {
            size: "M",
            quantity: response.sizeM,
          },
          {
            size: "L",
            quantity: response.sizeL,
          },
          {
            size: "XL",
            quantity: response.sizeXL,
          },
        ];
        setProductSizes(productSize);
      } catch (error) {
        console.log("Xảy ra lỗi: ", error);
      }
    };

    fetchAPI();
  }, []);

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

      if (index === 0) {
        setUrlMain(base64Image.substring("data:image/png;base64,".length));
      } else if (index === 1) {
        setUrlSub1(base64Image.substring("data:image/png;base64,".length));
      } else if (index === 2) {
        setUrlSub2(base64Image.substring("data:image/png;base64,".length));
      } else {
        setUrlThumb(base64Image.substring("data:image/png;base64,".length));
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

  const HandleUpdateSize = () => {
    setSizeS(productSizes[0].quantity);
    setSizeL(productSizes[1].quantity);
    setSizeM(productSizes[2].quantity);
    setSizeXL(productSizes[3].quantity);
    setOpenEditDialog(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("url 1", urlSub1 ? "co url 1" : "khong co url1");
    return await productAPI
      .updateProduct(
        params.id,
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
        alert("Cập nhật sản phẩm thành công");
        navigate("/product");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={cx("container")}>
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
              src={
                mainImage !== "string" && mainImage !== ""
                  ? mainImage
                  : defaultImage
              }
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
          </div>

          <div className={cx("image-product-mobile")}>
            <img
              src={
                mainImage !== "string" && mainImage !== ""
                  ? mainImage
                  : defaultImage
              }
              alt="product-thumb"
              className={cx("product-thumb")}
            />
            <div className={cx("add-image-btn-mobile")}>
              <input
                type="file"
                id="file"
                className={cx("image-upload")}
                onChange={onChangeImage}
              />
              <label htmlFor="file" className={cx("image-icon")}>
                <AddImageIcon width={25} height={25} />
              </label>
            </div>
          </div>

          <div onClick={HandleNextImage}>
            <BackMobileIcon
              width={35}
              height={35}
              className={cx("circle-back-mobile")}
            />
          </div>

          <div className={cx("circle-next")} onClick={HandleNextImage}>
            <NextIcon width={30} height={30} />
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
            onChange={(e) => setClub(e.target.value)}
            value={club}
          />
        </div>

        <div className={cx("name-product")}>
          <p>Quốc gia</p>
          <input
            className={cx("name-input")}
            type="text"
            onChange={(e) => setNation(e.target.value)}
            value={nation}
          />
        </div>

        <div className={cx("name-product")}>
          <p>Khu vực</p>
          <input
            className={cx("name-input")}
            type="text"
            value={productDetail.groupName}
          />
        </div>

        <div className={cx("name-product")}>
          <p>Mùa giải</p>
          <input
            className={cx("name-input")}
            type="text"
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
          <div className={cx("size-list")}>
            {productSizes.map((item, key) => {
              if (item.quantity > 0) {
                return (
                  <SizeButton
                    size={item.size}
                    key={key}
                    quantity={item.quantity}
                    className={cx("button-size")}
                  />
                );
              }
            })}
            <button
              className={cx("add-size-btn")}
              onClick={HandleOpenEditDialog}
            >
              <EditIcon width="20px" height="20px" />
            </button>
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
          <Button
            className={cx("cancel-button")}
            primary
            onClick={HandleSubmit}
          >
            Lưu
          </Button>
        </div>
      </div>

      {openEditDialog && (
        <EditQuantitySizeForm
          closeDialog={HandleCloseEditDialog}
          data={productSizes}
          onSave={HandleUpdateSize}
        />
      )}
    </div>
  );
}

export default ProductDetail;
