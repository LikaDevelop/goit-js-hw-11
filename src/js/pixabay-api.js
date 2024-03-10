// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


export function searchImg(searchWorlds, callback) {

    const searchParams = new URLSearchParams({
        key: "42798522-d824d0eb072596e07151c9725",
        q: searchWorlds,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            callback(data.hits);
        })
        .catch(error => {
            // Error handling
        });
};


