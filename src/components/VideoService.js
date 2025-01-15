import { useState, useEffect } from 'react';
import '../styles/VideoService.css'

const serviceList = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736608958/Removal-899_nthwqp.png',
        title: 'Digital Networking'
    },
    {
        id:2,
        image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736609096/Removal-84_v5apwy.png',
        title: 'Graphic Desgining'
    },
    {
        id:3,
        image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736679702/Removal-649_omau9f.png',
        title: 'Video Editing'
    },
    {
        id:4,
        image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736679526/Removal-519_nbbuc6.png',
        title: 'Web Development'
    },
    {
        id:5,
        image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736679526/Removal-593_jqsqvg.png',
        title: '3D Video Editing'
    }
];

const VideoService = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceList.length);
      }, 2000); // Change every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="video-service-container">
        <p>We offers service to grow your Business</p>
        <h1>Transform your business today with <br/> our services</h1>
        <button className='quote-btn'>Get a Quote</button>
        <ul className="animation-cotnainer">
          {/* <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736608338/Removal-799_i6cszu.png" alt="" /> */}
          {serviceList.map((item, index) => (
            <li
              key={item.id}
              className={`slide ${currentIndex === index ? "active" : ""}`}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default VideoService