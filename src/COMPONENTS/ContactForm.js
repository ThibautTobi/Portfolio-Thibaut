import React, { useState } from 'react';
import '../CSS/ContactForm.css';
import { postFormulaire } from '../connection/Api';

function ContactForm () {

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await postFormulaire(formData);
      
      console.log('Formulaire soumis avec succès');
      console.log(response);

      // affichage d'une alerte de succès
      alert('Le formulaire a été soumis avec succès');
    } catch (error) {

      console.error('Erreur lors de la soumission du formulaire');
      console.error(error);

      //affichage d'une alerte
      alert(`Une erreur s'est produite lors de la soumission du formulaire.`);
    }

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
          maxLength={20}
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
          maxLength={20}
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
          maxLength={40}
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
          maxLength={400}
        ></textarea>
      </div>
      <button type="submit" className='submit'>Envoyer</button>
    </form>
  );
};

export default ContactForm;