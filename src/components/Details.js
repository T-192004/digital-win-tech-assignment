import { useState, useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import '../styles/Details.css'

const scrollImageList = [
    {
        id: 1,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943494/Screenshot_2025-01-15_174611_q00py6.png",
    },
    {
        id: 2,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943494/Screenshot_2025-01-15_174611_q00py6.png",
    },
    {
        id: 3,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943494/Screenshot_2025-01-15_174611_q00py6.png",
    },
    {
        id: 4,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943494/Screenshot_2025-01-15_174611_q00py6.png",
    },
    {
        id: 5,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943494/Screenshot_2025-01-15_174611_q00py6.png",
    },
    {
        id: 6,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943494/Screenshot_2025-01-15_174611_q00py6.png",
    },
    {
        id: 7,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736950410/Screenshot_2025-01-15_194036_d8fu07.png",
    },
    {
        id: 8,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736950410/Screenshot_2025-01-15_194036_d8fu07.png",
    },
    {
        id: 9,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736950410/Screenshot_2025-01-15_194036_d8fu07.png",
    }
]


const growthCardDetails = [
    {   
        id: 1,
        image: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736607818/Screenshot_2025-01-11_203101_umidvy.png",
        title: "Digital Marketing",
        description: "Digital marketing can significantly boost your business by enhancing your online presence"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736607810/Screenshot_2025-01-11_203228_vtpjoa.png",
        title: "Design & Development",
        description: "Effective design and development are crucial for creating a strong brand identity and providing a seamless user experience."
    },
    {   
        id:3,
        image: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736607874/Screenshot_2025-01-11_203349_a4nzwn.png",
        title: "Sales & Marketing",
        description: "Strategic sales and marketing efforts drive customer engagement and fuel business growth through targeted campaigns."
    }
]
const operateCardList = [
    {
        id: 1,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736948233/Screenshot_2025-01-15_190513-removebg-preview_wqblwe.png",
        title: "Strategic Planning",
        description: "Crafting clear, actionable plans for long-term success."
    },
    {
        id: 2,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736948233/Screenshot_2025-01-15_190528-removebg-preview_k0ds6l.png",
        title: "Engagement",
        description: "Building strong connections with your target auduence."
    },
    {
        id: 3,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736948233/Screenshot_2025-01-15_190541-removebg-preview_vypbzc.png",
        title: "Data-Driven Insights",
        description: "Leveraging data to guide smart business decisions."
    },
    {
        id: 4,
        imageUrl: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736948233/Screenshot_2025-01-15_190549-removebg-preview_vwa237.png",
        title: "Innovative Solutions",
        description: "Delivering creative tech solutions for modern challenges."
    }
]
const Details = ({ profileSectionRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the first visible image index
  const itemsPerPage = 3; // Number of images per view

  const handleNext = () => {
    if (currentIndex + itemsPerPage < scrollImageList.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  const handleGetQuoteClick = () => {
    if (profileSectionRef && profileSectionRef.current) {
      profileSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleItems = scrollImageList.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
    return (
        <div className='details-container'>
            <div className='description-section'>
                <img 
                    src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736761895/Screenshot_2025-01-13_152059_bbt1yz.png"
                    alt="descriptive"
                />
                <div className="description-details" >
                    <p>Connect to New Possiblities with</p>
                    <h1>Digital Win Technologies: Elevate Your Brand Today</h1>
                    <p>
                        At Digital Web Technologies, we bring over 8 years 
                        of dedicated expertise to redefine digital marketing in the real 
                        estate industry. Elevate your bran, generate quality leads, and 
                        achieve unparalleled success with our comprehensive suite of services. From 
                        innovative social media management to captivating drones shoots and personalized
                        advertising strategies, we blend creativity with technology to Transform your 
                        real estate ventures.
                    </p>
                    <button onClick={handleGetQuoteClick}>Get a Quote</button>
                </div>
            </div>
            <div className='projects-section'>
                <h2>The Stories Behind Our Game-Changing Projects</h2>
                <h1> <span style={{fontWeight: 'bold'}}>Our feature </span>projects </h1>
                <div className="arrow-icons-container">
                    {currentIndex > 0 && (
                    <FaArrowCircleLeft
                        className="arrow-icon"
                        onClick={handlePrev}
                    />
                    )}
                    {currentIndex + itemsPerPage < scrollImageList.length && (
                    <FaArrowCircleRight
                        className="arrow-icon"
                        onClick={handleNext}
                    />
                    )}
                </div>
                <ul className="projects-list">
                    {visibleItems.map((each) => (
                    <li key={each.id} className="projects-card">
                        <img src={each.imageUrl} alt={each.id} />
                    </li>
                    ))}
                </ul>
            </div>
            <div className="operate-section" >
                <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736943660/Screenshot_2025-01-15_175038_p51brp.png" alt="operate" />
                <div className="operate-details">
                    <h2>How we Operate</h2>
                    <p>We are committed to driving your success through comprehensive, customized strategies.</p>
                    <ul className="operate-list" >
                        {operateCardList.map(each => (
                            <li className="operate-card" key={each.id}>
                                <img src={each.imageUrl} alt="card-image" />
                                <h2>{each.title}</h2>
                                <p>{each.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='grow-section'>  
                <h1>To Grow your</h1>
                <h2>Business today you need </h2>
                <ul className='growth-card-list'>
                    {growthCardDetails.map(card => (
                        <li className='growth-card' key={card.id}>
                            <img src={card.image} alt={card.title} className='card-image' />
                            <h1>{card.title}</h1>
                            <p>{card.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Details