import React from 'react';
import './About.css';
import { FaDumbbell, FaUserFriends, FaSmile } from 'react-icons/fa';
import backgroundImage from '../components/img/academia01.jpg';

const About = () => {
  const features = [
    { icon: <FaDumbbell />, title: "Treinos Variados", description: "Musculação, Yoga, Crossfit, HIIT e muito mais." },
    { icon: <FaUserFriends />, title: "Instrutores Especializados", description: "Equipe preparada para te guiar e motivar." },
    { icon: <FaSmile />, title: "Ambiente Motivador", description: "Academia acolhedora e inspiradora para todos." },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Sobre Nós</h1>
        <p>Bem-vindo à nossa academia! Aqui você encontra treinos variados, ambiente motivador e instrutores dedicados para te ajudar a alcançar seus objetivos.</p>

        <div className="about-features">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
