import axios from "axios";

export const AXIOS = axios.create({
    //baseURL: "http://localhost:3000"
    baseURL: "https://api-tarefas-385p.onrender.com"
})