import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
import { FaCheck } from 'react-icons/fa';
import musculacao from "../components/img/musculacao.jpg";
import yoga from "../components/img/yoga.jpg";
import alongamento from "../components/img/alongamento.jpg";
import boxe from "../components/img/boxe.jpg";
import crossfit from "../components/img/crossfit.jpg";
import hiit from "../components/img/HIIT.jpg";
import zumba from "../components/img/zumba.jpg";

const Home = () => {
  const modalities = [
    { title: "Musculação", image: musculacao },
    { title: "Yoga",  image: yoga },
    { title: "Alongamento", image: alongamento },
    { title: "Boxe", image: boxe },
    { title: "Crossfit", image: crossfit },
    { title: "HIIT", image: hiit },
    { title: "Zumba", image: zumba },
  ];

  const pricing = [
    { 
      service: "Musculação", 
      price: "R$120/mês", 
      color: "linear-gradient(135deg, #667eea, #764ba2)",
      benefits: ["Acesso livre à academia", "Treinos guiados", "Avaliação física mensal"]
    },
    { 
      service: "Yoga", 
      price: "R$100/mês", 
      color: "linear-gradient(135deg, #f6d365, #fda085)",
      benefits: ["Aulas semanais", "Ambiente tranquilo", "Instrutores certificados"]
    },
    { 
      service: "Alongamento", 
      price: "R$90/mês", 
      color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      benefits: ["Aulas semanais", "Melhora da flexibilidade", "Acompanhamento individual"]
    },
    { 
      service: "Boxe", 
      price: "R$110/mês", 
      color: "linear-gradient(135deg, #f5576c, #f093fb)",
      benefits: ["Treinos intensos", "Aulas práticas", "Desenvolvimento de coordenação"]
    },
    { 
      service: "Crossfit", 
      price: "R$150/mês", 
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
      benefits: ["Treinos de alta intensidade", "Força funcional", "Acesso a equipamentos premium"]
    },
    { 
      service: "HIIT", 
      price: "R$130/mês", 
      color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
      benefits: ["Treinos rápidos e intensos", "Queima máxima de calorias", "Suporte de treinador"]
    },
    { 
      service: "Zumba", 
      price: "R$90/mês", 
      color: "linear-gradient(135deg, #ff9a9e, #fecfef)",
      benefits: ["Aulas divertidas", "Dança para queimar calorias", "Ambiente motivador"]
    },
  ];

  return (
    <div>
      <Hero />
      
      <h2>Nossas Modalidades</h2>
      <section className="home-modalities">
        {modalities.map((mod, index) => (
          <div className="home-card" key={index}>
            <img src={mod.image} alt={mod.title} />
            <h3>{mod.title}</h3>
            <p>{mod.description}</p>
          </div>
        ))}
      </section>

      <h2>Preços e Pacotes</h2>
<section className="home-pricing">
  {pricing.map((item, index) => (
    <div className="price-card" key={index}>
      <h3>{item.service}</h3>
      <p className="price">{item.price}</p>
      <ul>
        {item.benefits.map((benefit, i) => (
          <li key={i}><FaCheck style={{ marginRight: "8px", color: "white" }} /> {benefit}</li>
        ))}
      </ul>
    </div>
  ))}
</section>

    </div>
  );
};

export default Home;
