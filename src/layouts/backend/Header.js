import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="Header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/admin">
              Admin
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/topic">
                    Chủ đề
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/post">
                    Bài viết
                  </Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/admin/page">
                    Trang Đơn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/user">
                    Tài khoản
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/order">
                    Đơn hàng
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/admin/product" role="button">
                    Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/admin/category"> Danh mục</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/admin/brand">
                    Thương hiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/banner">
                    Banner
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/menu">
                    Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
