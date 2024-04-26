import React from "react";
import { Link } from "react-router-dom";
import { ImgUrl } from "../../../basePath/ImgUrl";
import { addToCart } from "../../../state/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';


const ProductItems = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...product, count: 1 } }));
    toast.success("Thêm vào giỏ hàng thành công!")
  };
  return (
    <div className="product-item">
      <div className="product__item">
        <div className="product__item__pic set-bg">
          <Link to={"/product-detail/" + product.slug}>
            <img
            src={`${ImgUrl}product/${product.image}`}
              alt="..."
              className="img-fluid w-100"
            />
          </Link>
          <ul className="product__hover">
            <li>
              <a href="#">
                <img src="../img/icon/heart.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/icon/compare.png" alt="" />{" "}
                <span>Compare</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/icon/search.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>{product.name}</h6>
          <Link
                           onClick={handleAddToCart}
                            className="add-cart"
                          >
                            + Add To Cart
                          </Link>
                          <Toaster />


          <div className="rating">
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </div>
          <h5>${product.price}</h5>
          <div className="product__color__select">
            <label for="pc-4">
              <input type="radio" id="pc-4" />
            </label>
            <label className="active black" for="pc-5">
              <input type="radio" id="pc-5" />
            </label>
            <label className="grey" for="pc-6">
              <input type="radio" id="pc-6" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
