import React, { useContext, useEffect, useState } from "react";
import styles from "./Warehouse.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRotate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductSearchBar from "../../components/SearchBar/ProductSearchBar";
import WareHouseForm from "../../components/WareHouseForm";
import productAPI from "../../api/productAPI";
import { ProductContext } from "../../contexts/productContext";

const cx = classNames.bind(styles);

function WareHouse() {
  const { products, setProducts } = useContext(ProductContext);

  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectProduct, setSelectProduct] = useState({ id: "", name: "" });

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await productAPI.getImportList();
        console.log("Success: ", response);
        setProducts(response);
      } catch (error) {
        console.log("Xảy ra lỗi: ", error);
      }
    };

    fetchAPI();
  }, []);

  const HandleOpenDialog = (val) => {
    console.log("sản phẩm: ", val);
    setSelectProduct({ id: val.id, name: val.name });
    setOpenDialog(true);
  };

  const HandleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("search-and-buttons")}>
        <ProductSearchBar placeholder="Tìm kiếm phiếu nhập theo tên sản phẩm" />
      </div>

      <div className={cx("import-table-wrapper")}>
        <div className={cx("table-content")}>
          <div className={cx("header-title")}>
            <span>Tên sản phẩm</span>
            <span>Tồn dư</span>
            <span>Đơn vị</span>
            <span>Ghi chú</span>
          </div>

          {loading ? (
            <FontAwesomeIcon icon={faRotate} spin />
          ) : (
            <div className={cx("detail-infos")}>
              {products && products.length > 0 && products.map((val, key) => {
                return (
                  <div className={cx("info-wrapper")}>
                    <Link className={cx("info")} to={`/warehouse/${val.id}`}>
                      <span className={cx("id")}>{val.name}</span>
                      <span className={cx("name")}>
                        {val.sizeS + val.sizeL + val.sizeM + val.sizeXL}
                      </span>
                      <span className={cx("time")}>áo</span>
                      <span className={cx("value")}>trống</span>
                    </Link>
                    <button
                      primary
                      className={cx("new-import")}
                      onClick={() => HandleOpenDialog(val)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {openDialog && (
        <WareHouseForm closeDialog={HandleCloseDialog} data={selectProduct} />
      )}
    </div>
  );
}

export default WareHouse;
