import { api } from '../services/api.js';

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data) {
        return data;
    }

    return [];
}

export const getPostsBySlug = async (id) => {
    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/post?id=eq.${id}`);

    return {};
}