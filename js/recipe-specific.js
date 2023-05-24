import { host, wordPress, posts, endpoint } from "./imortsJS/url.js";

const recipeContainer = document.querySelector(".recipe_container");


// adding a variable to href value, retrieving it from the query string and using it in an api call
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("recipe");

const urlRecipe = host + wordPress + posts + "/" + id + endpoint ;

// finding the chosen recipe 
async function findRecipe(id) {
    try {
        const response = await fetch(urlRecipe);
        const recipe = await response.json();

        // getting the date without the time
        let getDate = new Date(recipe.date);
        const createDate = {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        };

        const recipeData = {
            "date": getDate.toLocaleDateString("en-GB", createDate),
            "title": recipe.title.rendered,
            "image": recipe._embedded["wp:featuredmedia"][0].source_url,
            "imageAltText": recipe._embedded["wp:featuredmedia"][0].alt_text,
            "content": recipe.content.rendered

        }

       
        return recipeData;

    } catch(error) {// catching if an error occours
        console.log(error);

        // displaying error message
        recipeContainer.innerHTML = errorMessage(); 
    }
}

// creating html
async function recipeHTML() {
    const recipeHTML = await findRecipe(id);
    
    recipeContainer.innerHTML = `<div class="above_post"><a href="recipes-list.html" class="go-back">Back to recipes!</a>
                                 <p>${recipeHTML.date}</p></div>
                                     <div class="recipe">
                                         <img src="${recipeHTML.image}" alt="${recipeHTML.imageAltText}" id="modal_img">
                                         <dialog id="modal">
                                             <img src="${recipeHTML.image}" alt="${recipeHTML.imageAltText}" id="modal_img">
                                         </dialog>
                                         <h3>${recipeHTML.title}</h3>
                                         <div clss="content">${recipeHTML.content}</div>
                                    </div>`;

}

recipeHTML();

// setting recipe title as a title
async function changeTitle() {
    const getTitle = await findRecipe(id);

    // adding name property to the title and fixed encoding 
    const title = getTitle.title;

    function removeOuterTags(inputString) {
        const parser = new DOMParser();
        const recipeTitle = parser.parseFromString(inputString, "text/html");
        return recipeTitle.body.innerText;
    }

    const inputString = `<p>${getTitle.title}</p>`;
    const newTitle = removeOuterTags(inputString);

    document.title = newTitle;
}

changeTitle();

 // making modal functional
async function activateModal() {
    const modalImage = await findRecipe(id);
    
    const modalContainer = document.getElementById("modal");
    const openModal = document.getElementById("modal_img");
    const modal = document.querySelector("dialog");

    function openImage() {
        modalContainer.showModal();
    }

    function closeImage() {
        modalContainer.close();
    }

    openModal.addEventListener("click", openImage);
    modal.addEventListener("click", closeImage);
}

activateModal();


        // function activateModal() {
        //     modalContainer.showModal();
        // }

        // function closeModal() {
        //     modalContainer.close();
        // }

        // openModal.addEventListener("click", activateModal);
        // modal.addEventListener("click", closeModal);
