import React from 'react';
import ClassCard from '../components/ClassCard';
import "./Modalities.css";

const modalitiesData = [
  { title: "Musculação", description: "Treinos de força e resistência." },
  { title: "Yoga", description: "Aprimore sua flexibilidade e equilíbrio." },
  { title: "Pilates", description: "Fortaleça seu corpo com alongamento e controle." },
  { title: "HIIT", description: "Treinos intensos para queimar gordura rapidamente." },
  { title: "Zumba", description: "Dança animada para melhorar o condicionamento físico." },
  { title: "Crossfit", description: "Treino funcional com alta intensidade e força." },
  { title: "Alongamento", description: "Melhore a mobilidade e previna lesões." },
  { title: "Boxe", description: "Treinos de resistência, força e coordenação." }
];

const Modalities = () => {
  return (
    <div className="modalities-container">
      <h1>Modalidades</h1>
      <div className="modalities-grid">
        {modalitiesData.map((modality, index) => (
          <ClassCard
            key={index}
            title={modality.title}
            description={modality.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Modalities;
