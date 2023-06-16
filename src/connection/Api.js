const API_BASE_URL = 'http://localhost:3000'; // Remplacez l'URL par l'URL de votre backend

export const getProjects = async () => {

    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
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
        const response = await fetch(`${API_BASE_URL}/projects`, {
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
          throw new Error('Erreur lors de la création du projet');
        }
      } catch (error) {
        console.error(error);
      }
    };

///////////////////////////////////////////////////////////////////////////

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const data = await getProjects();
//       setProjects(data);
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h1>Liste des projets</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>{project.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;

