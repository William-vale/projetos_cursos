import axios from 'axios';

export const api  = axios.create({
    baseURL: '[Minha URL BASE SUPABASE]',
    headers: {
        apikey: "[Minha Chave de API]",
        authorization: "[Minha CHave de Autorização]"
    }
})