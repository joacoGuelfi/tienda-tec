import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Layout from './Layout';
import Categories from '../pages/Categories';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/categories/:id" element={<Categories />} />
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;