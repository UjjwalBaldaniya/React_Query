import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/super-hero'>Super-Hero</NavLink>
                    <NavLink to='/rq-super-hero'>RQ Super-Hero</NavLink>
                    <NavLink to='/parallel-queries'>Parallel Queries</NavLink>
                    <NavLink to='/dynamic-parallel-queries'>Dynamic Parallel</NavLink>
                </ul>
            </div>
        </>
    )
};

export default Navbar;
