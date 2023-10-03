import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/superhero'>SuperHero</Link>
                    <Link to='/rqsuperhero'>RqSuperHero</Link>
                </ul>
            </div>
        </>
    )
};

export default Navbar;
