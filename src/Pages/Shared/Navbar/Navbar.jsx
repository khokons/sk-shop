import './Navbar.css';
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { IoMdCart } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { AuthContext } from '../../../Components/Providers/AuthProvider';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // handle logout success
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const routes = [
    { path: '/', name: 'Shop', width: 70, left: 0 },
    { path: '/mens', name: 'Men', width: 70, left: 90 },
    { path: '/womens', name: 'Women', width: 80, left: 188 },
    { path: '/kids', name: 'Kids', width: 70, left: 294 },
  ];

  const activeRoute = routes.find(route => route.path === location.pathname) || routes[0];

  return (
    <nav className="navbar bg-base-100 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            {
              isMenuOpen ? <ImCross className="h-5 w-5" /> : 
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
            }
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow ${isMenuOpen ? 'block' : 'hidden'}`}>
            {routes.map((route, index) => (
              <li key={index}><Link to={route.path}>{route.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <img className='w-[40px] h-[40px]' src={logo} alt="logo" />
          <a className="text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Shopper</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row gap-6">
          {routes.map((route, index) => (
            <li key={index} className="relative">
              <Link to={route.path} className='hovered-link'>{route.name}</Link>
            </li>
          ))}
          <div
            className="animation"
            style={{ width: `${activeRoute.width}px`, left: `${activeRoute.left}px` }}
          ></div>
        </ul>
      </div>

      <div className="navbar-end gap-4">
        {user ? (
          <button onClick={handleLogOut} className='py-2 px-4 hidden lg:flex outline-none cursor-pointer rounded-xl border-2 uppercase text-yellow-400'>Logout</button>
        ) : (
          <Link to='/login'>
            <button className='py-2 px-4 hidden lg:flex outline-none cursor-pointer rounded-xl border-2 uppercase text-yellow-400'>Login</button>
          </Link>
        )}

        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user && <img src={user.photoURL} alt="" />}
          </div>
        </div>
        <div tabIndex={0} role="button" className="btn btn-warning btn-circle">
          <div className="indicator">
            <Link to='/carts'>
              <IoMdCart className='h-5 w-5' />
              <span className="badge badge-sm indicator-item">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
