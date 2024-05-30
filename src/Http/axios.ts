import axios from 'axios'

// Création d'une instance axios
export const http = axios.create({
  baseURL: "https://api.api-onepiece.com/v2",
});

// Ajout d'une fonction pour récupérer les personnages
(async () => {
    const response = await http.get('/characters/fr')
    console.log(response.data)
})();