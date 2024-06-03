import React from 'react';
import '../Styles/Common.css';

function PopupContent({ content, onClose }) {
    let textContent;

    switch (content) {
        case "About Us":
            textContent = "Welcome to Bun Drop, where fast food meets cutting-edge technology! At Bun Drop, we revolutionize your dining experience by delivering delicious meals straight to your doorstep via our state-of-the-art drone fleet. Whether you're craving a juicy burger, crispy fries, or a refreshing drink, our drones ensure your order arrives hot and fresh, faster than ever. Discover the future of fast food with Bun Drop – where convenience takes flight!";
            break;
        case "Work":
            textContent = "At Bun Drop, we prioritize maintaining the highest quality of service for our customers. Due to current cost-cutting measures, we are not accepting new hires at this time. We value the interest and enthusiasm of potential team members and encourage you to check back with us in the future for new opportunities. Thank you for your understanding and support as we navigate these changes. We look forward to welcoming new talent to the Bun Drop family soon!";
            break;
        case "Sustainability":
            textContent = "At Bun Drop, we're not just transforming fast food delivery; we're also committed to a sustainable future. Our innovative drone delivery technology reduces carbon emissions and minimizes traffic congestion, offering an eco-friendly alternative to traditional delivery methods. By optimizing flight paths and using energy-efficient drones, we're doing our part to protect the environment while ensuring your favorite meals arrive swiftly and sustainably. Join us in our journey toward a greener tomorrow with Bun Drop!";
            break;
        default:
            textContent = "";
            break;
    }

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>{content}</h2>
                <p>{textContent}</p>
            </div>
        </div>
    );
}

export default PopupContent;