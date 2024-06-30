import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/components/cards.module.css';

const Cards = () => {
  return (
    <div className="container mt-5" id="cards">
      <div className='headline'>
         <h3 className=" pb-4 ">
          <img src="Add.png" alt="" />
          Add Your Listing</h3>
          </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4">
          <div className={`card ${styles.card1}`}>
            <div className="card-body">
              <h5 className="card-title mb-2">
                <img src="p1.svg" alt="" className="pe-3" />
                People
              </h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-4">
          <div className={`card ${styles.card2}`}>
            <div className="card-body">
              <h5 className="card-title mb-2">
                <img src="pl1.svg" alt="" className="pe-3" />
                Place
              </h5>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
              </p>
              <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
                Meet Up
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-4">
          <div className={`card ${styles.card3}`}>
            <div className="card-body">
              <h5 className="card-title mb-2">
                <img src="pro1.svg" alt="" className="pe-3" />
                Product
              </h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
              </p>
              <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
                Get It
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-4">
          <div className={`card ${styles.card4}`}>
            <div className="card-body">
              <h5 className="card-title mb-2">
                <img src="pro2.svg" alt="" className="pe-3" />
                Program
              </h5>
              <p className="card-text">
                Program Find events, meetups and workshops related to your hobby. Register or buy tickets online.
              </p>
              <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
                Attend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


/*import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import styles from '@/components/cards.module.css'


const cards = () => {
  return (
    <div className="card">
    <div className="pt-custom col-md-6 col-sm-12">
      <div className="card card1" >
        <div className="card-body">
          <h5 className="card-title mb-2">
            <img src="p1.png" alt="" className="pe-3"/>
            People
          </h5>
          <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
          <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
          Connect
        </button>
        </div>
      </div>
 
    <div className="card card2">
      <div className="card-body">
        <h5 className="card-title mb-2">
          <img src="pl1.png" alt="" className="pe-3"/>
          Place
        </h5>
        <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
        Meet Up
      </button>
      </div>
    </div>

    <div className="card card3" style={{width: '50%',margin:'2rem'}}>
      <div className="card-body">
        <h5 className="card-title mb-2">
          <img src="pro1.png" alt="" className="pe-3"/>
          Product
        </h5>
        <p className="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
        <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
       Get It
      </button>
      </div>
    </div>

    <div className="card card4" style={{width: '50%',margin:'2rem'}}>
      <div className="card-body">
        <h5 className="card-title mb-2">
          <img src="pro2.png" alt="" className="pe-3"/>
          Program
        </h5>
        <p className="card-text">Program
Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
        <button className="me-2 btn-custom me-5 ps-5 pe-5 rounded text-customcolor">
       Attend
      </button>
      </div>
    </div>
</div>
</div>
  )
}

export default cards
*/
