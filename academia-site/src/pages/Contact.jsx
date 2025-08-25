import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Mensagem enviada!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-new-container">
      <div className="contact-icons">
        <a href="tel:+5511999999999"><FaPhone /> (11) 99999-9999</a>
        <a href="mailto:contato@academia.com"><FaEnvelope /> contato@academia.com</a>
        <a href="https://www.google.com/maps?q=Rua+Exemplo,+123" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt /> Rua Exemplo, 123
        </a>
      </div>

      <div className="contact-form-container">
        <h1>Fale Conosco</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
