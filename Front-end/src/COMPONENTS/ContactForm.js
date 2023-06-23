import React, { useState } from 'react';
import '../CSS/ContactForm.css';
import emailjs from 'emailjs-com';
//import { postFormulaire } from '../connection/Api';

function ContactForm () {

  const [formData, setFormData] = useState({
    name: '',
    prenom:'',
    email: '',
    sujet: '',
    message: '',
  });

  const { name, prenom, email, sujet, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_portfolio',
        'template_6zkvgc6',
        e.target,
        'XSaRwpZUYQrzWinOX'
      );

      console.log('Formulaire soumis avec succès');
      // affichage d'une alerte de succès
      alert('Le formulaire a été soumis avec succès');
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire');
      console.error(error);
      //affichage d'une alerte d'erreur
      alert(`Une erreur s'est produite lors de la soumission du formulaire.`);
    }
      // Réinitialisez le formulaire après l'envoi
      setFormData({ name: '', prenom:'', email: '',sujet: '', message: '' });
  };
    
  /** version avec back end NodeMailer **/

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    // try {
    //   const response = await postFormulaire(formData);
      
    //   console.log('Formulaire soumis avec succès');
    //   console.log(response);

    //   // affichage d'une alerte de succès
    //   alert('Le formulaire a été soumis avec succès');
    // } catch (error) {

    //   console.error('Erreur lors de la soumission du formulaire');
    //   console.error(error);

    //   //affichage d'une alerte
    //   alert(`Une erreur s'est produite lors de la soumission du formulaire.`);
    // }

    // Réinitialisez le formulaire après l'envoi
  //   setFormData({ name: '', prenom:'', email: '',sujet: '', message: '' });
  // };

  return (
    <form onSubmit={handleSubmit} className='formulaire'>
      <div className='formulaire_display'>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
          maxLength={20}
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={handleChange}
          required
          maxLength={20}
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor="email" >Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          maxLength={40}
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor='sujet' >
          Sujet :
        </label>
        <input
          type='text'
          id='sujet'
          name='sujet'
          value={sujet}
          onChange={handleChange}
          required
          maxLength={60}
        />
      </div>
      <div className='formulaire_display'>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
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