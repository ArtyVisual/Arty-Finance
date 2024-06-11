
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './img/lightlogo2.png'
import logout from './img/logout.png'


const Navbar = () => {
  return (
    <div className="my-1 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/expense">Expense</NavLink></li>
            <li><NavLink to="/income">Income</NavLink></li>
            <li><NavLink to="/balance">Balance</NavLink></li>
          </ul>
        </div>
        <a className="flex justify-center items-center px-0 text-xl">
          <img className='md:w-12 md:h-10 w-8 h-6 mr-2 md:ml-4  ' src={logo} alt="" />
          <div className='flex justify-center items-center'>
          <span className='text-teal-200 font-bold md:text-2xl text-md'>Arty</span>
          <span className='text-yellow-50 font-semibold md:text-2xl text-sm'>-Finance</span>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu text-xl gap-2 menu-horizontal px-1">
          <li><NavLink to="/" activeClassName="active">Dashboard</NavLink></li>
          <li><NavLink to="/expense" activeClassName="active">Expense</NavLink></li>
          <li><NavLink to="/income" activeClassName="active" >Income</NavLink></li>
          <li><NavLink to="/balance" activeClassName="active" >Balance</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end ">
        <Link to="https://github.com/ArtyVisual/">
          <div className='flex hover:text-white btn  px-2 py-1 bg-yellow-100 text-black font-sans'>
            <img src={logout} className='w-6 h-6 ' alt="" />
            <span className=" hidden text-lg md:flex ">GitHub</span>
          </div>
        </Link>
      </div>
      
    </div>
  );
}

export default Navbar;
