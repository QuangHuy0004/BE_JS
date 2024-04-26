import Dashboard from "../pages/backend/dashboard/Dashboard";
import ProductList from "./../pages/backend/product/ProductList";
import PageCreate from "./../pages/backend/page/PageCreate";
import PostList from "../pages/backend/post/PostList";
import PostCreate from "./../pages/backend/post/PostCreate";
import UserList from "./../pages/backend/user/UserList";
import UserCreate from "./../pages/backend/user/UserCreate";
import { TopicDetail, TopicEdit, TopicList } from "../pages/backend/topic";
import BrandCreate from "../pages/backend/brand/BrandCreate";
import Category from "../pages/backend/category/CategoryCreate";
import { ProductCreate, ProductDetail, ProductEdit } from "../pages/backend/product";
import { MenuCreate, MenuEdit, MenuList } from "../pages/backend/menu";
import MenuDetail from "../pages/backend/menu/MenuDetail";
import { BannerCreate, BannerDetail, BannerEdit, BannerList } from "../pages/backend/banner";
import{ OrderList, OrderDetail} from './../pages/backend/order';
import { UserEdit } from "../pages/backend/user";
import UserDetail from './../pages/backend/user/UserDetail';
import { PostDetail, PostEdit } from "../pages/backend/post";
import { PageDetail, PageEdit, PageList } from "../pages/backend/page";

const BackendRouter = [

  { path: "/admin", component: Dashboard },

  //Product
  { path: "/admin/product", component: ProductList },
  { path: "/admin/product/create", component: ProductCreate },
  { path: "/admin/product/edit/:id", component: ProductEdit },
  { path: "/admin/product/show/:id", component: ProductDetail },

  //Banner
  { path: "/admin/banner", component: BannerList },
  { path: "/admin/banner/create", component: BannerCreate },
  { path: "/admin/banner/edit/:id", component: BannerEdit },
  { path: "/admin/banner/show/:id", component: BannerDetail },

  //Page
  { path: "/admin/page", component: PageList },
  { path: "/admin/page/create", component: PageCreate },
  { path: "/admin/page/edit/:id", component: PageEdit },
  { path: "/admin/page/show/:id", component: PageDetail },

  //Post
  { path: "/admin/post", component: PostList },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/edit/:id", component: PostEdit },
  { path: "/admin/post/show/:id", component: PostDetail },

  //User
  { path: "/admin/post", component: PostList },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/create", component: PostEdit },
  { path: "/admin/post/create", component: PostCreate },
  
  //User
  { path: "/admin/user", component: UserList },
  { path: "/admin/user/create", component: UserCreate },
  { path: "/admin/user/edit/:id", component: UserEdit },
  { path: "/admin/user/show/:id", component: UserDetail },

  //BrandCRUD
  { path: "/admin/brand/", component: BrandCreate },

  //CategoryCRUD
  { path: "/admin/category", component: Category },

  //Topic
  { path: "/admin/topic", component: TopicList },
  { path: "/admin/topic/edit/:id", component: TopicEdit },
  { path: "/admin/topic/show/:id", component: TopicDetail },

  //Menu
  { path: "/admin/menu", component: MenuList },
  { path: "/admin/menu/create", component: MenuCreate },
  { path: "/admin/menu/edit/:id", component: MenuEdit },
  { path: "/admin/menu/show/:id", component: MenuDetail },

  //Oder
  { path: "/admin/order", component: OrderList },
  { path: "/admin/order/show/:id", component: OrderDetail },

];
export default BackendRouter;
