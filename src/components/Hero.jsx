// components/Hero.js
"use client";

import React, { useState } from 'react';
import styles from './hero.module.css';

const Hero = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="ps-2 ps-lg-5 pt-8 pb-5 bg-violet">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4">
          <h1 className='heading fs-1'>Explore your <span className="text-blue">hobby</span> or <span className="text-violet">passion</span></h1>
          <div className={styles.exploreYourHobbyContainer}>
            <p className={styles.signInToInteract}>
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p className={styles.ifYouAre}>
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
            <div className={styles.hero_img}>
            <img src="Group_27.png" alt="" className="pt-custom hero-img " />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-4 ps-5">
          <ul className={styles['social-list']}>
            <ul className={`${styles.tabchoice} ${isSignIn ? styles.active : ''}`} onClick={() => setIsSignIn(true)}><a href="#form1" className='mb-4'>Sign In</a></ul>
            <ul className={`${styles.tabchoice} ${!isSignIn ? styles.active : ''}`} onClick={() => setIsSignIn(false)}><a href="#form2">Join In</a></ul>
          </ul>
          {isSignIn ? (
            <form className="form1" id="form1">
              <div>
                <button className="me-2 btn-custom me-5 ms-4 pe-5 rounded text-customcolor justify-center mt-4 btn-form1">
                  <img src="Google.png" alt="" /> Continue With Google
                </button>
              </div>
              <div>
                <button className="me-2 btn-custom me-5 ms-4 pe-5 rounded text-customcolor mt-4 mb-4 btn-form1">
                  <img src="Group.png" alt="" /> Continue With Facebook
                </button>
              </div>
              <div className="d-flex ms-5 mb-4 center img-separator">
                <img src="Connect With Separator.png" alt="" className={styles.img_separator}/>
              </div>
              <div className="input1 mb-4">
                <input type="email" name="email" placeholder="Email" id="email" autoComplete="off" className="input1" />
              </div>
              <div className="input1">
                <input type="password" name="password" placeholder="Password" id="password" autoComplete="off" className="input1" />
              </div>
              <br />
              <div className="group ps-5">
                <div className="container d-flex">
                  <div className="left-elements">
                    <input id="check" type="checkbox" className="check" />
                    
                    <label htmlFor="check" className='fs-custom'><span className="icon"></span> Remember me</label>
                    
                    
                  </div>
                  <div className="right-elements ps-4">
                    <img src="lock_black_24dp 1.png" alt="Lock Icon" />
                    <a href="#forgot" className='fs-custom'>Forgot Password?</a>
                  </div>
                </div>
              </div>
              <button type="submit" className="me-2 btn-custom me-5 ms-4 pe-5 rounded text-customcolor btn-form1 mt-4">
                Continue
              </button>
            </form>
          ) : (
            <form className="form2" id='form2'>
              <div>
                <button className="me-2 btn-custom me-5 ms-4 pe-5 rounded text-customcolor justify-center mt-4 btn-form1">
                  <img src="Google.png" alt="" /> Continue With Google
                </button>
              </div>
              <div>
                <button className="me-2 btn-custom me-5 ms-4 pe-5 rounded text-customcolor mt-4 mb-4 btn-form1">
                  <img src="Group.png" alt="" /> Continue With Facebook
                </button>
              </div>
              <div className="d-flex ms-5 mb-4 center">
                <img src="Connect With Separator.png" alt="" className={styles.img_separator} />
              </div>
              <div className="input1 mb-4">
                <input type="email" name="email" placeholder="Email" id="email" autoComplete="off" className="input1" />
              </div>
              <div className="input1">
                <input type="password" name="password" placeholder="Password" id="password" autoComplete="off" className="input1" />
              </div>
              <br />
              <div className="group">
                <div className="container ps-5">
                  <img src="Group 207.png" alt="" className={styles.img_separator}/>
                </div>
                <p className={styles.agree}>By continuing, you agree to our Terms of Service and Privacy Policy</p>
              </div>
              <button type="submit" className="me-2 btn-custom me-5 ms-4 pe-5 rounded text-customcolor btn-form1 mt-2">
                Agree and Continue
              </button>
            </form>
            
          )}
        </div>
        <div>
       
        </div>
        <img src="Group_27.png" alt="" className={styles.hero2} />
      </div>
    </div>
  );
}

export default Hero;
