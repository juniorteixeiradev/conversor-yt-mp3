import axios from "axios";
require('dotenv').config()
export default function useApi (){
    
    

    const api = (videoId:string) => axios({
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl?id=',
        params: {id: videoId},
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
  }
        });

    return {
        api
    }

}