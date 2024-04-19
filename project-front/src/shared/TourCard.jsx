import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext'; 
import Swal from 'sweetalert2'; 

import './tour-card.css';

const TourCard = ({ tour }) => {
  const { user } = useContext(AuthContext); 

  const { _id, title, city, photo, price } = tour;

  const showLoginAlert = () => {
    Swal.fire({
      title: 'You are not logged in',
      text: 'Please log in to book the tour.',
      icon: 'info',
      confirmButtonText: 'OK',
    });
  };

  const handleBooking = () => {
    if (!user) {
      showLoginAlert();
    } else {
      // Handle booking logic, e.g., redirect to booking page or show booking form
      console.log('User is logged in. Proceed with booking logic...');
    }
  };

  return (
    <div className='tour__card'>
      <Card>
        <div className='tour__img'>
          <img src={photo} alt='tour-img' />
        </div>
        <CardBody>
          <div className='card__top d-flex align-items-center justify-content-between'>
            <span className='tour__location d-flex align-items-center gap-1'>
              <i className='ri-map-pin-line'></i>
              {city}
            </span>
          </div>
          <h5 className='tour__title'>
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>₹{price} <span>/per person</span></h5>
          </div>
          <button className='btn booking__btn' onClick={handleBooking}>
            {user ? (
              <Link to={`/tours/${_id}`}>Book Now</Link>
            ) : (
              <span>Book Now</span>
            )}
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
