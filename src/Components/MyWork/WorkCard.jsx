// src/components/WorkCard.jsx
import React from 'react';

const WorkCard = ({ work, onButtonClick }) => {

    const handleButtonClick = () => {
        window.open('https://tour-booking-project.web.app/home', '_blank');
    };

    return (
        <div
            style={{
                border: '1px solid #ddd',
                padding: '20px', // Increased padding for a bigger card
                borderRadius: '20px', // Larger border radius for smoother corners
                textAlign: 'center',
                width: '400px', // Increased width of the card
                boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)', // Larger shadow for more depth
            }}
        >
            <h3>{work.w_name}</h3>
             <img
                src={work.w_img}
                alt={work.w_name}
                style={{
                    marginTop: '20px',
                    width: '100%', // Full width of the card
                    height: '300px', // Increased height for images
                    objectFit: 'cover',
                    borderRadius: '15px', // Larger border radius for image
                }}
            />

            {work.w_no === 3 && (
                <button
                style={{
                    marginTop: '10px', // Increased margin for better spacing
                    padding: '10px 10px', // Larger button padding
                    backgroundColor: 'transparent',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '20px', // Larger border radius for button
                    border: '2px solid white',
                    cursor: 'pointer',
                    fontSize: '1.2rem', // Larger font size for the button
                    transition: '0.6s',
                }}
                onClick={handleButtonClick}
                >
                    Jump Here
                </button>
            )}
        </div>
    );
};

export default WorkCard;
