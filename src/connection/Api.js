// Remplacez l'URL par l'URL de votre backend
const API_BASE_URL = 'http://localhost:3000/portfolio';

export const getProjects = async () => {

    try {
        const response = await fetch(`${API_BASE_URL}`);
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error('Erreur lors de la récupération des projets');
        }
      } catch (error) {
        console.error(error);
      }
    };

export const postFormulaire = async (formData) => {

    try {
        const response = await fetch(`${API_BASE_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(`Erreur lors de l'envoie du formulaire`);
        }
      } catch (error) {
        console.error(error);
      }
    };
