"use client";

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "@/components/navbar.modules.css"; // Import the CSS file for styling

const Navbar = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JavaScript only on the client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-custom1">
      <div className="container-fluid">
        <a className="navbar-brand ps-5" href="#">
          <img className="logo" src="HobbyCueLogo.png" alt="HobbyCue" />
        </a>
        <div className="bell">
          <img src="icons8_search.png" alt="" className='pe-4'/>
          <img src="notifications_black_24dp 1.png" alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ">
            <div className='search-box'>
            <form className="d-flex flex-form ">
              <input type="search" placeholder="Search here..." className="input1" />
              <input type="submit" value="🔎" />
            </form>
            </div>
            <div className="d-flex">
              <li className="nav-item dropdown ps-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="exploreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="Explore.png" alt="Explore" className="pe-2" />
                  Explore
                </a>
                <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                  <li><a className="dropdown-item" href="#">People-Community</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Places-venues</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Programs-Events</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Products-Store</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Blogs</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown ps-4">
                <a
                  className="nav-link dropdown-toggle icons"
                  href="#"
                  id="hobbiesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="Hobbies.png" alt="Hobbies" className="pe-2" />
                  Hobbies
                </a>
              </li>
              <li className="nav-item icons">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src="bookmark_black_24dp 1.png" alt="Bookmark" className="ps-4" />
                </a>
              </li>
              <li className="nav-item icons">
                <a className="nav-link" href="#">
                  <img src="notifications_black_24dp 1.png" alt="Notifications" className="ps-3" />
                </a>
              </li>
              <li className="nav-item icons">
                <a className="nav-link" href="#">
                  <img src="Product 3.png" alt="Profile" className="ps-3" />
                </a>
              </li>
            </div>
            <button className="me-2 btn-custom me-5 ms-5 ps-5 pe-5 rounded text-customcolor">
                Sign In
              </button>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
