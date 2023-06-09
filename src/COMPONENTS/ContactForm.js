import React, { useState } from 'react';
import '../CSS/ContactForm.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    prenom:'',
    email: '',
    message: '',
  });

  const { name, prenom, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Par exemple, vous pouvez utiliser une API ou une fonction pour envoyer les données à un serveur
    console.log(formData);
    // Réinitialisez le formulaire après l'envoi
    setFormData({ name: '', prenom:'', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='formulaire'>
      <div className='formulaire_display'>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          className="name_input"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor="prenom" className='prenom'>Prénom :</label>
        <input
          type="text"
          className="prenom_input"
          name="prenom"
          value={prenom}
          onChange={handleChange}
          required
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor="email" className='email'>Email :</label>
        <input
          type="email"
          className="email_input"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor="message"className='message'>Message :</label>
        <textarea
          className="message_input"
          name="message"
          value={message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className='submit'>Envoyer</button>
    </form>
  );
};

export default ContactForm;