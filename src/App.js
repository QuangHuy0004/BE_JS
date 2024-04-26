import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontendLayout from './layouts/frontend';
import BackendLayout from './layouts/backend';
import AppRouter from './router';
import ProductDetail from './pages/frontend/Home/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          {AppRouter.FrontendRouter.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Route>
        <Route path="/admin" element={<BackendLayout />}>
          {AppRouter.BackendRouter.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Route>
        <Route path="/product/:id" component={ProductDetail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
