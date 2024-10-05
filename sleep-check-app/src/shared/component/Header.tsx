import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PAGEURLS } from '../const/page-urls';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
  return (

    <>
    <header className='flex justify-between items-center bg-slate-900'>
    <div className="p-3">
        <h2 className="text-white text-2xl">
            <Link to="/">Sleep Check App</Link>
        </h2>
    </div>
    <div className="menu">
    {/**
     * humberger munu for mobile
     */}
    <div className="md:hidden">
      <button onClick={toggleMenu} className="z-20 space-y-2 m-2 relative" >
        <div
          className={
            openMenu
              ? "w-8 h-0.5   bg-gray-600 translate-y-2.5 rotate-45"
              : "w-8 h-0.5 bg-gray-600"
          }
        />
        <div
          className={openMenu ? "opacity-0" : "w-8 h-0.5  bg-gray-600"}
        />
        <div
          className={
            openMenu
              ? "w-8 h-0.5  bg-gray-600 -rotate-45"
              : "w-8 h-0.5  bg-gray-600"
          }
        />
      </button>

      <nav
        className={
          openMenu
            ? "text-left fixed bg-slate-50 z-10 right-0 top-0 w-6/12 h-svh"
            : "fixed right-[-100%]"
        }
      >
        <ul className="mt-6">
          {PAGEURLS.map( (pageUrl) => {
            return (
              <li key={pageUrl.id} className="">
                <Link to={pageUrl.url}>{pageUrl.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </div>
    {/**
     * header menu for pc
     */}
    <nav>
      <ul className="hidden md:flex">
        {PAGEURLS.map((pageUrl) => {
          return (
            <li key={pageUrl.id} className="p-3">
              <Link
                to={pageUrl.url}
                className="text-white hover:font-bold"
              >
                {pageUrl.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
</header>
</>
  )
}

export default Header