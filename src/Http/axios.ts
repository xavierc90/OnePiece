import axios from 'axios'

export const http = axios.create({
  baseURL: "https://api.api-onepiece.com/v2",
});

(async () => {
    const response = await http.get('/characters/fr')
    console.log(response.data)
})();

