import * as request from "/js/pixabay-api.js";
import * as render from "/js/render-functions.js";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const formSearh = document.querySelector(".search-form");
const inputSearch = document.querySelector(".search-input");

formSearh.addEventListener("submit", async (event) => {
    event.preventDefault();
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = "";

    const loading = document.createElement("span");
    loading.classList.add("loader");
    loading.textContent = "Loading images, please wait..."
    formSearh.append(loading);


    const searchWorlds = formSearh.elements.search.value.trim();
    if (searchWorlds == "") {
        const loading = document.querySelector(".loader");
        loading.remove();
        iziToast.error({
            title: 'Error',
            message: "Search field can't be empty"
        });
    }
    else {
        const hits = await request.fetchHits(searchWorlds);
        const loading = document.querySelector(".loader");
        loading.remove();
        console.log(hits);
        if (hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
        }
        else {
            render.renderingImgs(gallery, hits)
        }
        inputSearch.value = '';
    }
});


