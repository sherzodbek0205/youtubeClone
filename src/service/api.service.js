import axios from 'axios';

export  const options = {
 params: {
   maxResults: '50'
 },
 headers: {
   'X-Rapidapi-Key': 'c7acb5c060msh87fbc015e4f414ap1dc7c7jsn432a80185445',
   'X-Rapidapi-Host': 'youtube-v31.p.rapidapi.com'
 }
};

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
export const ApiService = {
async fetching(url)  {
 const response = await axios.get(`${BASE_URL}/${url}`,options)
 return response.data
},
}