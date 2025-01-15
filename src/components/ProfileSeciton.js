import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import '../styles/ProfileSection.css'

const ProfileSection = ({ profileSectionRef }) => {
    const [activeField, setActiveField] = useState('Marketing'); // Default to 'Marketing'

    const handleFieldSelection = (field) => {
        setActiveField(field);
    };

    const fieldList = [
        { id: 'Marketing', name: 'Digital Marketing Team' },
        { id: 'UIUX', name: 'UI/UX & Graphic Design' },
        { id: 'Development', name: 'Development' },
        { id: 'Sales', name: 'Sales' },
    ];

    const departmentProfiles = [
        { id: 'Marketing', title: 'Digital Dynamos Team' },
        { id: 'UIUX', title: 'UI/UX & Graphic Design Team' },
        { id: 'Development', title: 'Development Team' },
        { id: 'Sales', title: 'Sales Team' },
    ];

    // Get the index of the active field
    const activeIndex = fieldList.findIndex((field) => field.id === activeField);
    return (
        <div className="profile-section">
            <div className='linkdin-section'>
                <h1><span>Digital</span> Product <span>Design <br/>  Development </span>Sales</h1>
                <div className='list-section'>
                    <ul className='fields-list'>
                        {fieldList.map((field) => (
                        <li
                            key={field.id}
                            onClick={() => handleFieldSelection(field.id)}
                            style={{
                            cursor: 'pointer',
                            fontWeight: activeField === field.id ? 'bold' : 'normal',
                            }}
                        >
                            {field.name}
                        </li>
                        ))}
                    </ul>
                    <div className="profiles-container">
                        {departmentProfiles
                        .filter((_, index) => index >= activeIndex) // Show from the active index onward
                        .map((profile) => (
                            <div key={profile.id} className="department-profile" id={profile.id}>
                            <h2>{profile.title}</h2>
                            <ul className='profile-list'>
                                {Array.from({ length: 4 }).map((_, index) => (
                                <li className="profile-card" key={index}>
                                    <FaLinkedin className="linkedin-icon" />
                                    <div>
                                    <h2>Anudeep Reddy</h2>
                                    <p>Founder CEO Digital Marketing Strategist</p>
                                    </div>
                                    <img
                                    src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736953922/Screenshot_2025-01-15_204155_i1fuzq.png"
                                    alt="profile"
                                    />
                                </li>
                                ))}
                            </ul>
                            <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='review-section'>
                <h2>Our valuable Clients</h2>
                <div className='review-cards-section'>
                    <div className='review-card-1'>
                        <h2>30+</h2>
                        <h3>Satisfied Clients</h3>
                        <p>We make brands a reality by delivering exceptional digital marketing and design services.</p>
                    </div>
                    <div className='reviews-company-list'>
                        <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736952552/Screenshot_2025-01-15_201904_bfmvfb.png" alt="companies" />
                    </div>
                </div>
            </div>
            <div className="form-section" ref={profileSectionRef}>
                <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736951092/Screenshot_2025-01-15_195358_utadzf.png" alt="form rocket" />
                <div className='form-container' >
                    <form>
                        <h2>Get Started: Elevate Your Brand Today</h2>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' />
                        <label>Mobile Number</label>
                        <input type="text" placeholder='Enter Mobile number' />
                        <label>Email Address</label>
                        <input type="email" placeholder='Enter ID' />
                        <label>Your message</label>
                        <textarea type="text" placeholder='Enter your message here' />
                        <button type="submit" onClick={e => e.preventDefault()} >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection