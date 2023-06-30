import React from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
              <li><Link className="btn btn-ghost" to='/'>Home</Link></li>
              <li><Link className="btn btn-ghost" to='/projects'>My Projects</Link></li>
              <li><Link className="btn btn-ghost" to='/aboutMe'>About Me</Link></li>
              <li><Link className="btn btn-ghost" to='/connect'>Let's Connect</Link></li>
            </ul>
          </div>
          <Link className=" normal-case text-xl">Sadik's Portfolio</Link>
          <Link className="btn btn-ghost" to='/logInNow'>Log in</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 md:flex items-center">
            <li>
              <Link className="btn btn-ghost pt-4" to='/'>
                Home
              </Link>
            </li>
            <li><Link className="btn btn-ghost pt-4" to='/projects'>My Projects</Link></li>
            <li><Link className="btn btn-ghost pt-4" to='/aboutMe'>About Me</Link></li>
            <li>
              <Link to='/connect'>
                <AwesomeButton className='shadow-none' type="secondary">Let's Connect</AwesomeButton></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;