import { Link, useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  let cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => {
    return total + parseInt(item.count);
  }, 0);
  return (
    <>
      <section className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link to="#">Sign in</Link>
                    <Link to="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>Usd <i className="arrow_carrot-down"></i></span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
              <div className="header__logo ">
                <Link to="http://localhost:3000/"><img src="img/logo.png" alt="" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <MainMenu />
            </div>
            <div className="col-lg-3 col-md-3">
            <div
                  onClick={() => {
                    navigate("/shopping-cart");
                  }}
                  className="btn btn-outline-dark position-relative mt-4"
                >
                  <FaShoppingBag className="fs-3"/>
                  <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {totalItems}
                  </div>
                </div>
              {/* <div className="header__nav__option mt-1">
                <Link to="http://localhost:3000/shopping-cart"><img className="p-1 " width="120%" src="https://static.vecteezy.com/system/resources/previews/000/616/943/original/vector-shopping-bag-icon.jpg" alt="" /> <span >{totalItems}</span></Link>
              </div> */}
            </div>
          </div>
          <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
      </section>
    </>
  );
};

export default Header;



