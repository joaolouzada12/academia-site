import React from 'react';
import ClassCard from '../components/ClassCard';
import "./Modalities.css";

const modalitiesData = [
  {
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    title: "Musculação",
    description: "Treinos de força e resistência."
  },
  {
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
    title: "Yoga",
    description: "Aprimore sua flexibilidade e equilíbrio."
  },
  {
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    title: "Pilates",
    description: "Fortaleça seu corpo com alongamento e controle."
  },
  {
    image: "https://images.pexels.com/photos/3763874/pexels-photo-3763874.jpeg",
    title: "HIIT",
    description: "Treinos intensos para queimar gordura rapidamente."
  },
  {
    image: "https://images.pexels.com/photos/4324022/pexels-photo-4324022.jpeg",
    title: "Zumba",
    description: "Dança animada para melhorar o condicionamento físico."
  },
  {
    image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
    title: "Crossfit",
    description: "Treino funcional com alta intensidade e força."
  },
  {
    image: "https://images.pexels.com/photos/290817/pexels-photo-290817.jpeg",
    title: "Alongamento",
    description: "Melhore a mobilidade e previna lesões."
  },
  {
    image: "https://images.pexels.com/photos/669576/pexels-photo-669576.jpeg",
    title: "Boxe",
    description: "Treinos de resistência, força e coordenação."
  }
];

const Modalities = () => {
  return (
    <div className="modalities-container">
      <h1>Modalidades</h1>
      <div className="modalities-grid">
        {modalitiesData.map((modality, index) => (
          <ClassCard
            key={index}
            image={modality.image}
            title={modality.title}
            description={modality.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Modalities;
