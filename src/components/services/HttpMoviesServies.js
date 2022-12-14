//npm i axios
/* import axios from "axios";
 */
import axios from "axios";


let config = {
  apiUrl: "http://www.omdbapi.com/?"
} 

axios.defaults.baseURL = config.apiUrl;

export function setCommonHeader(headerName,value){
  axios.defaults.headers.common[headerName]=value;
}

const httpService = {
  get: axios.get,
 /*  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete, */
  axios,
};

export default httpService; 
