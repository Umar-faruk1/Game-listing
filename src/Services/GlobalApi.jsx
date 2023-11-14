import  axios  from "axios";

const key = 'c5e0fd53c7c146d1bcf9954878d4fbe3'
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/genres?key='+key);
const getGameListByGenreId =(id)=> axiosCreate.get('/games?key='+key+'&genres='+id);

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}