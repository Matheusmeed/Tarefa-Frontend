import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tarefa-backend-matheusmeed.herokuapp.com/',
});

export default api;
