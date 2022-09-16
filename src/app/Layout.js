import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import CartWidget from '../components/CartWidget'

const Layout = () => {
    return (
        <div>
            <NavBar>
                <CartWidget />
            </NavBar>
            <Outlet />
            <h2>Soy el footer </h2>
        </div>
    )
}

export default Layout