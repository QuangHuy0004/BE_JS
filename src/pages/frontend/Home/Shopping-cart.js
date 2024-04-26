import "./Style.css";
import { useSelector } from "react-redux";
import { ImgUrl } from "../../../basePath/ImgUrl";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../../state/cartSlice";
import { useDispatch } from "react-redux";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  let cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.count * item.price;
  }, 0);

  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shopping Cart</h4>
                <div className="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <a href="./shop.html">Shop</a>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => {
                        return (
                          <tr>
                            <td className="product__cart__item">
                              <div className="product__cart__item__pic">
                                <img style={{width: '50%'}}
                                  src={`${ImgUrl}product/${item.image}`}
                                  alt="..."
                                />
                              </div>
                              <div className="product__cart__item__text">
                                <h6>{item.name}</h6>
                                <h5 className="text-danger">
                                  {item.price.toLocaleString("vi-VN")}$
                                </h5>
                              </div>
                            </td>
                            <td className="quantity__item d-flex pt-5">
                              <div className="input-group-prepend d-flex">
                             
                                 <button
                                  onClick={() =>
                                    dispatch(decreaseCount({ id: item.id }))
                                  }
                                  className="btn btn-light"
                                  type="button"
                                  id="button-minus"
                                >
                                  −
                                </button>
                              </div>
                              <input
                                style={{ maxWidth: "50px" }}
                                type="text"
                                className="form-control mx-1"
                                value={item.count}
                              />
                              <div className="input-group-append me-3">
                              <button
                                  onClick={() =>
                                    dispatch(increaseCount({ id: item.id }))
                                  }
                                  className="btn btn-light"
                                  type="button"
                                  id="button-plus"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="cart__price">
                              {(item.price * item.count).toLocaleString(
                                "vi-VN"
                              )}
                              $
                            </td>
                            <td className="cart__close">
                              <FaTrash
                                className="text-danger fs-3"
                                onClick={() =>
                                  dispatch(removeFromCart({ id: item.id }))
                                }
                              />
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <h3>Cart not found!</h3>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/product">Continue Shopping</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner" /> Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  {/* <li>
                                        Subtotal <span>$ 169.50</span>
                                    </li> */}
                  <li>
                    Total <span>{total.toLocaleString("vi-VN")}$</span>
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
