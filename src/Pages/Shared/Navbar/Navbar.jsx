import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { IoMdCart } from "react-icons/io";

const Navbar = () => {

  const navLink = <>
    <li className='uppercase'><Link to='/'>Shop</Link></li>
    <li className='uppercase'><Link to='/mens'>Men</Link></li>
    <li className='uppercase'><Link to='/womens'>Women</Link></li>
    <li className='uppercase'><Link to='/kids'>Kids</Link></li>
  </>

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow">
            {navLink}
          </ul>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <img className='w-[40px] h-[40px]' src={logo} alt="logo" />
          <a className="text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Shopper</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row gap-6">
          {navLink}
          {/* <hr className='border-none w-[40px] h-[3px] bg-red-500 rounded-xl absolute bottom-0 left-0' /> */}
        </ul>
      </div>
   

      <div className="navbar-end gap-4">
        <Link>
        <button className='py-2 px-4 hidden lg:flex outline-none cursor-pointer rounded-xl border-2 uppercase'>Login</button>
        </Link>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Link to='/cart'>
            <IoMdCart className='h-5 w-5' />
            <span className="badge badge-sm indicator-item">0</span>
            </Link>
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
