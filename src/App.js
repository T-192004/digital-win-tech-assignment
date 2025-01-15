import React, { useRef } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import VideoService from './components/VideoService';
import Details from './components/Details';
import ProfileSection from './components/ProfileSeciton';
import Footer from './components/Footer';

const App = () => {
  const profileSectionRef = useRef(null);  // Create a ref for ProfileSection
  return (
    <div className='app'>
      <HeroSection />
      <Details  profileSectionRef={profileSectionRef}/>
      <VideoService />
      <ProfileSection ref={profileSectionRef} />
      <Footer />
    </div>
   
  );
};

export default App;



