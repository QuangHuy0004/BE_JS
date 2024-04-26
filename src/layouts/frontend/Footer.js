import { useEffect, useState } from "react";
import PostService from "../../services/PostServices";

const Footer = () => {
  const [limit, setLimit] = useState(6);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const result = await PostService.list("page", 1, limit);
              setPosts(result.post);
              console.log(result);
          } catch (error) {
              console.error('Error fetching ser:', error);
          }
      };
      fetchData();
  }, [limit]);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="http://localhost:3000/">
                    <img src="img/footer-logo.png" alt="" />
                  </a>
                </div>
                <p>
                  The customer is at the heart of our unique business model, which
                  includes design.
                </p>
                <a href="http://localhost:3000/contact">
                  <img src="img/payment.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <a href="#">Clothing Store</a>
                  </li>
                  <li>
                    <a href="#">Trending Shoes</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Sale</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>Services</h6>
                {posts && posts.map((item, index) => (
                <ul key={index}>
                  <li>
                    <a href="http://localhost:3000/about">{item.title}</a>
                  </li>
                </ul>
                ))}
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>NewLetter</h6>
                <div className="footer__newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales &amp;
                    promos!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span className="icon_mail_alt" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright__text">
                <p>
                  Copyright © 2024 All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://www.facebook.com/ciu.huy.140" target="_blank">
                    Tran Quang Huy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
