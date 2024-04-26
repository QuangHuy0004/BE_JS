import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductItem from "./ProductItems";
import ProductService from "../../../services/ProductServices";
import { addToCart } from "../../../state/cartSlice";
import { ImgUrl } from "../../../basePath/ImgUrl";
// import { urlImage } from "../../../config";
// import { useCart } from "../../../utils/Cart";
// import toast from "react-hot-toast";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [productCurrent, setProductCurrent] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const { addToCart } = useCart();
  const handleAddToCart = () => {
    // Dispatch action addToCart với sản phẩm hiện tại và số lượng là 1
    dispatch(addToCart({ item: { ...productCurrent, count: quantity } }));
}

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  console.log("productCurrent");

  useEffect(() => {
    (async () => {
      const res = await ProductService.detail(slug, 4);
      setProductCurrent(res.product);
      setProducts(res.products);
      setQuantity(1);
    })();
  }, [slug]);

  useEffect(() => {
    (async () => {
      const res = await ProductService.detail(slug, 4);
      setProductCurrent(res.product);
      setProducts(res.products);
      setQuantity(1);
    })();
  }, [slug]);


  return (
    <div className="container-fluid mt-5">
      <section className="shop-details row">
        <div className="product__details__pic col-md-6">
          <div className="container">
            <div className="col-lg-6 col-md-9">
              <div className="tab-pane active" id="tabs-1">
                <div
                  className="product__details__pic__item"
                  style={{
                    backgroundImage: `url(${ImgUrl}product/${productCurrent.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "200%",
                    height: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="product__details__content col-md-6">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div  className="product__details__text">
                  <h4>{productCurrent.name}</h4>
                  
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span> - 5 Reviews</span>
                  </div>
                  <h3>
                    ${productCurrent.price} <span>$130.00</span>
                  </h3>
                  <p>{productCurrent.detail}</p>
                  <div className="product__details__option">
                    <div className="product__details__option__size">
                      <span>Size:</span>
                      <label htmlFor="xxl">
                        xxl
                        <input type="radio" id="xxl" />
                      </label>
                      <label className="active" htmlFor="xl">
                        xl
                        <input type="radio" id="xl" />
                      </label>
                      <label htmlFor="l">
                        l
                        <input type="radio" id="l" />
                      </label>
                      <label htmlFor="sm">
                        s
                        <input type="radio" id="sm" />
                      </label>
                    </div>
                    <div className="product__details__option__color">
                      <span>Color:</span>
                      <label className="c-1" htmlFor="sp-1">
                        <input type="radio" id="sp-1" />
                      </label>
                      <label className="c-2" htmlFor="sp-2">
                        <input type="radio" id="sp-2" />
                      </label>
                      <label className="c-3" htmlFor="sp-3">
                        <input type="radio" id="sp-3" />
                      </label>
                      <label className="c-4" htmlFor="sp-4">
                        <input type="radio" id="sp-4" />
                      </label>
                      <label className="c-9" htmlFor="sp-9">
                        <input type="radio" id="sp-9" />
                      </label>
                    </div>
                  </div>
                  <div className="product__details__cart__option">
                    <div className="quantity">
                      <div>
                        <button
                          className="btn-dark bg-white px-4 py-1"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                        <span className="mx-3">{quantity}</span>
                        <button
                          className="btn-dark bg-white  px-4 py-1"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <a className="btn btn-dark"  onClick={(handleAddToCart)} >
                      add to cart
                    </a>
                  </div>
                  <div className="product__details__last__option">
                    <h5>
                      <span>Guaranteed Safe Checkout</span>
                    </h5>
                    <img src="../img/shop-details/details-payment.png" alt="" />
                    <ul>
                      <li>
                        <span>SKU:</span> 3812912
                      </li>
                      <li>
                        <span>Categories:</span> Clothes
                      </li>
                      <li>
                        <span>Tag:</span> Clothes, Skin, Body
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tab-content">
        <div className="active">
          <div className="">
            <div className="product__details__tab__content__item">
              <h5>Products Infomation</h5>
              <p>
                A Pocket PC is a handheld computer, which features many of the
                same capabilities as a modern PC. These handy little devices
                allow individuals to retrieve and store e-mail messages, create
                a contact file, coordinate appointments, surf the internet,
                exchange text messages and more. Every product that is labeled
                as a Pocket PC must be accompanied with specific software to
                operate the unit and must feature a touchscreen and touchpad.
              </p>
              <p>
                As is the case with any new technology product, the cost of a
                Pocket PC was substantial during it’s early release. For
                approximately $700.00, consumers could purchase one of
                top-of-the-line Pocket PCs in 2003. These days, customers are
                finding that prices have become much more reasonable now that
                the newness is wearing off. For approximately $350.00, a new
                Pocket PC can now be purchased.
              </p>
            </div>
            <div className="product__details__tab__content__item">
              <h5>Material used</h5>
              <p>
                Polyester is deemed lower quality due to its none natural
                quality’s. Made from synthetic materials, not natural like wool.
                Polyester suits become creased easily and are known for not
                being breathable. Polyester suits tend to have a shine to them
                compared to wool and cotton suits, this can make the suit look
                cheap. The texture of velvet is luxurious and breathable. Velvet
                is a great choice for dinner party jacket and can be worn all
                year round.
              </p>
            </div>
          </div>
        </div>
   
        <div className="tab-pane" id="tabs-7" >
          <div className="product__details__tab__content">
            <p className="note">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos lobortis
              des mollis ut risus. Sedcus faucibus an sullamcorper mattis
              drostique des commodo pharetras loremos.
            </p>
            <div className="product__details__tab__content__item">
              <h5>Products Infomation</h5>
              <p>
                A Pocket PC is a handheld computer, which features many of the
                same capabilities as a modern PC. These handy little devices
                allow individuals to retrieve and store e-mail messages, create
                a contact file, coordinate appointments, surf the internet,
                exchange text messages and more. Every product that is labeled
                as a Pocket PC must be accompanied with specific software to
                operate the unit and must feature a touchscreen and touchpad.
              </p>
              <p>
                As is the case with any new technology product, the cost of a
                Pocket PC was substantial during it’s early release. For
                approximately $700.00, consumers could purchase one of
                top-of-the-line Pocket PCs in 2003. These days, customers are
                finding that prices have become much more reasonable now that
                the newness is wearing off. For approximately $350.00, a new
                Pocket PC can now be purchased.
              </p>
            </div>
            <div className="product__details__tab__content__item">
              <h5>Material used</h5>
              <p>
                Polyester is deemed lower quality due to its none natural
                quality’s. Made from synthetic materials, not natural like wool.
                Polyester suits become creased easily and are known for not
                being breathable. Polyester suits tend to have a shine to them
                compared to wool and cotton suits, this can make the suit look
                cheap. The texture of velvet is luxurious and breathable. Velvet
                is a great choice for dinner party jacket and can be worn all
                year round.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* product tuongtu  */}
      <section className="related spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="related-title">Related Product</h3>
            </div>
          </div>
          <div className="row ">
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <div key={product.id} className="col-md-3">
                  <ProductItem product={product} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
