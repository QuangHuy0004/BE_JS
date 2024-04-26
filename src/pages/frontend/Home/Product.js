import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductServices";
//giohang
import { addToCart } from "../../../state/cartSlice";
//phantrang
import ReactPaginate from "react-paginate";
import { ImgUrl } from "../../../basePath/ImgUrl";
import toast, { Toaster } from "react-hot-toast";

const ProductList = () => {
  
  const [showPagination, setShowPagination] = useState(true);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(6);
  const [productcategory, setproductcategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State luu input search
  const [searching, setSearching] = useState(false); // State de xem co dang tim hay ko
  const [totalUser, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await ProductService.list(1, limit);
      setTotalUser(result.total);
      setProducts(result.products);
      setTotalPages(Math.ceil(result.products.length / 3));
    })();
  }, [limit, searching, ]); 

  const handleCategoryFilter = async (categoryId) => {
    toast.success('Successfully Filter!');

    const result = await ProductService.list_product_category(
      categoryId,
      1,
      limit
    );
    setProducts(result.products);
    setTotalPages(Math.ceil(result.products.length / 6));
  };

  const handleBrandFilter = async (brandId) => {
    toast.success('Successfully Filter!');
    const result = await ProductService.list_product_brand(brandId, 1, limit);
    setProducts(result.products);
    setTotalPages(Math.ceil(result.products.length / 6));

  };

  useEffect(() => {
    (async () => {
      const result = await ProductService.list_product_category(3, 1, limit);
      setproductcategory(result.productcategory);
      setproductcategory("a", result.productcategory);
    })();
  }, [limit, searching]); //  searching vao dependency array

  const handleSearchChange = async (e) => {
    setShowPagination(false); // Ẩn phân trang khi thực hiện tìm kiếm
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    if (searchValue) {
      setSearching(true); // => true neu nguoi dung search
      performSearch(searchValue);
    } else {
      setSearching(false); // => false neu nguoi dung xoa search
    }
  };

  const performSearch = async (searchValue) => {
    const result = await ProductService.list_product_search(searchValue);
    setProducts(result.products);
  };

  const handlePageClick = (selectedItem) => {
    const selectedPage = selectedItem.selected; // bam trang nao load ra trang do
    ProductService.list(selectedPage + 1, limit) // phan trang tham so tu 0 nen + 1
      .then((result) => {
        setProducts(result.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="shop__sidebar">
              <div className="shop__sidebar__search">
                <form
                  onSubmit={(e) => e.preventDefault()} // Ngăn chặn gửi form khi nhấn Enter
                  className="shop__sidebar__search"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange} // Gọi hàm handleSearchChange mỗi khi giá trị thay đổi
                  />
                  <button type="submit">
                    <span className="icon_search" />
                  </button>
                </form>
              </div>
              <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseOne">
                        Categories
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul>
                            <li>
                              <a
                                href="#"
                                onClick={() => handleCategoryFilter(1)}
                              >
                                Shirt
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={() => handleCategoryFilter(2)}
                              >
                                Bag
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={() => handleCategoryFilter(4)}
                              >
                                Shoes
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={() => handleCategoryFilter(3)}
                              >
                                Accessory
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseTwo">
                        Branding
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul>
                            <li>
                              <a href="#" onClick={() => handleBrandFilter(1)}>
                                Vietnamse
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={() => handleBrandFilter(2)}>
                                America
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={() => handleBrandFilter(3)}>
                                North-America
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={() => handleBrandFilter(4)}>
                                Italia
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseThree">
                        Filter Price
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__price">
                          <ul>
                            <li>
                              <a href="#">$0.00 - $50.00</a>
                            </li>
                            <li>
                              <a href="#">$50.00 - $100.00</a>
                            </li>
                            <li>
                              <a href="#">$100.00 - $150.00</a>
                            </li>
                            <li>
                              <a href="#">$150.00 - $200.00</a>
                            </li>
                            <li>
                              <a href="#">$200.00 - $250.00</a>
                            </li>
                            <li>
                              <a href="#">250.00+</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFour">
                        Size
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__size">
                          <label htmlFor="xs">
                            xs
                            <input type="radio" id="xs" />
                          </label>
                          <label htmlFor="sm">
                            s
                            <input type="radio" id="sm" />
                          </label>
                          <label htmlFor="md">
                            m
                            <input type="radio" id="md" />
                          </label>
                          <label htmlFor="xl">
                            xl
                            <input type="radio" id="xl" />
                          </label>
                          <label htmlFor="2xl">
                            2xl
                            <input type="radio" id="2xl" />
                          </label>
                          <label htmlFor="xxl">
                            xxl
                            <input type="radio" id="xxl" />
                          </label>
                          <label htmlFor="3xl">
                            3xl
                            <input type="radio" id="3xl" />
                          </label>
                          <label htmlFor="4xl">
                            4xl
                            <input type="radio" id="4xl" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFive">
                        Colors
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__color">
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
                          <label className="c-5" htmlFor="sp-5">
                            <input type="radio" id="sp-5" />
                          </label>
                          <label className="c-6" htmlFor="sp-6">
                            <input type="radio" id="sp-6" />
                          </label>
                          <label className="c-7" htmlFor="sp-7">
                            <input type="radio" id="sp-7" />
                          </label>
                          <label className="c-8" htmlFor="sp-8">
                            <input type="radio" id="sp-8" />
                          </label>
                          <label className="c-9" htmlFor="sp-9">
                            <input type="radio" id="sp-9" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseSix">
                        Tags
                      </a>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__tags">
                          <a href="#">Product</a>
                          <a href="#">Bags</a>
                          <a href="#">Shoes</a>
                          <a href="#">Fashio</a>
                          <a href="#">Clothing</a>
                          <a href="#">Hats</a>
                          <a href="#">Accessories</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="shop__product__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__left">
                    <p>Showing results</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__right">
                    <p>Sort by Price:</p>
                    <select>
                      <option value="">Low To High</option>
                      <option value="">$0 - $55</option>
                      <option value="">$55 - $100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {products && products.length  > 0 ? (
                products.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item sale">
                      <Link to={`/product-detail/${item.slug}`}>
                        <div className="product__item__pic set-bg">
                          <img
                            className="d-block w-100"
                            src={`${ImgUrl}product/${item.image}`}
                            alt={item.name}
                          />
                          <span className="label">Sale</span>
                          <ul className="product__hover">
                            <li>
                              <a href="#">
                                <img src="img/icon/heart.png" alt="" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/icon/compare.png" alt="" />{" "}
                                <span>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/icon/search.png" alt="" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__item__text">
                          <h6>{item.name}</h6>
                          <Link
                            onClick={() => { 
                              dispatch(
                                addToCart({ item: { ...item, count: 1 } })
                              )   
                              toast.success('Thêm vào giỏ hàng thành công!');}
                            }
                            className="add-cart"
                          >
                            + Add To Cart
                          </Link>
                          <Toaster
                            position="top-center"
                            reverseOrder={false}
                            gutter={8}
                            containerClassName=""
                            containerStyle={{}}
                            toastOptions={{
                              // Define default options
                              className: "",
                              duration: 5000,
                              style: {
                                background: "#363636",
                                color: "#fff",
                              },
                              // Default options for specific types
                              success: {
                                duration: 3000,
                                theme: {
                                  primary: "green",
                                  secondary: "black",
                                },
                              },
                            }}
                          />


                          <div className="rating">
                            <i className="fas fa-star mx-1" />
                            <i className="fas fa-star mx-1" />
                            <i className="fas fa-star mx-1" />
                            <i className="fas fa-star mx-1" />
                            <i className="far fa-star mx-1" />
                          </div>
                          <h5 className="text-dark">{item.price} $</h5>
                          <div className="product__color__select">
                            <label htmlFor="pc-28">
                              <input type="radio" id="pc-28" />
                            </label>
                            <label className="active black" htmlFor="pc-29">
                              <input type="radio" id="pc-29" />
                            </label>
                            <label className="grey" htmlFor="pc-30">
                              <input type="radio" id="pc-30" />
                            </label>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-lg-12">
                  <img src="https://urlscan.io/screenshots/73e9a2b0-ae17-4824-86c1-345a6166c562.png"></img>
                </div>
              )}
            </div>
            <div className="row">
              {showPagination && (
                <div className="col-lg-12 d-flex justify-content-center">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="<"
                    pageClassname="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
