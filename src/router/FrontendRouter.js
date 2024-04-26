import About from "../pages/frontend/Home/About";
import Contact from "../pages/frontend/Home/Contact";
import Login from "../pages/frontend/Home/Login";
import MainContent from "../pages/frontend/Home/Main-content";
import Product from "../pages/frontend/Home/Product";
import ProductDetail from "../pages/frontend/Home/ProductDetail";
import ShoppingCart from "../pages/frontend/Home/Shopping-cart";
import PostDetail from "../pages/frontend/Home/PostDetail";
import Post from "../pages/frontend/Home/Post";
import Home from "../pages/frontend/Home";

const FrontendRouter = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/product-detail/:slug", component: ProductDetail },
  { path: "/login", component: Login },
  { path: "/pages", component: MainContent },
  { path: "/about", component: About },
  { path: "/shopping-cart", component: ShoppingCart },
  { path: "/blog-details", component: MainContent },
  { path: "/post", component: Post },
  { path: "/post-detail/:slug", component: PostDetail },
  { path: "/contact", component: Contact },
];
export default FrontendRouter;
