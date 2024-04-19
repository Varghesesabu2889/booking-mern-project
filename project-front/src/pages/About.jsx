import React, { useState } from 'react';
import travel from '../assets/images/travel icon.png';
import '../styles/about.css'; 
import AdminPanel from '../components/adminPanel/AdminPanel';

const About = () => {
  const [showThanks, setShowThanks] = useState(false);
  const handleSubscribe = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 5000);
  };

  return (
    <div className='about-container'>
    <div className='content'>
      <h2 style={{color:"black"}}>Welcome to <span style={{color:"blue"}}> Journey Junction </span></h2>
      <p>At Journey Junction, we're dedicated to transforming your travel aspirations into unforgettable adventures. Our goal is to equip you with the resources and expertise needed to craft personalized journeys that resonate with your wanderlust spirit. Whether you're embarking on a solo escapade, planning a getaway with loved ones, or seeking new horizons with friends, our platform is your gateway to immersive experiences and cherished memories.</p>
        <p>Our team of travel enthusiasts and experts curates a diverse range of destinations, activities, and accommodations to cater to your unique preferences and interests. From serene beach retreats to thrilling mountain expeditions, cultural immersions to culinary explorations, we strive to fulfill every traveler's dreams.</p>
        
      </div>

      <div className='image-container'>
        <img src={travel} alt='travel'  />
      </div>
      <AdminPanel/>
    </div>
  );
};

export default About;
