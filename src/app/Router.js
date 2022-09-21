import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Layout from './Layout';
import Categories from '../pages/Categories';
import Cart from '../pages/Cart';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product/:id/:name/:marca/:talle/:precio" element={<Product />} />
                <Route path="/categories/:categorie" element={<Categories />} />
                <Route path="*" element={<div>404</div>} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;