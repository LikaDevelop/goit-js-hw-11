// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import axios from 'axios';


export async function fetchHits(searchWorlds) {
    const response = await axios.get("https://pixabay.com/api", {
        params: {
            key: "42798522-d824d0eb072596e07151c9725",
            q: searchWorlds,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    });
    return await response.data.hits;
};



