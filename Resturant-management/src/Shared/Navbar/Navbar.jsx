import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonBoundingBox } from "react-icons/bs";

const Navbar = () => {
    const navlinks = <>
        <li className='hover:underline'><NavLink to='/'>Home</NavLink></li>
        <li className='hover:underline'><NavLink>Contact Us</NavLink></li>
        <li className='hover:underline'><NavLink>Dashboard</NavLink></li>
        <li className='hover:underline'><NavLink to='/menu'>Our Menu</NavLink></li>
        <li className='hover:underline'><NavLink>Our Shop</NavLink></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu text-white font-semibold menu-sm dropdown-content space-x-4 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <div>
                    <a className="btn btn-ghost text-xl font-semibold w-40">BISTRO BOSS</a>
                    <p className='-mt-3 ml-3'>R E S T A U R A N T</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" text-white font-semibold menu-horizontal space-x-4 px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center space-x-4 text-2xl'>
                    <button>Login</button>
                    <span className='text-3xl pr-3'><BsPersonBoundingBox></BsPersonBoundingBox></span>
                </div>

            </div>
        </div>
    );
};

export default Navbar;