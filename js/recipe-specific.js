import { host, wordPress, posts, endpoint } from "./imortsJS/url.js";

const recipeContainer = document.querySelector(".recipe_container");


// adding a variable to href value, retrieving it from the query string and using it in an api call
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("recipe");

const urlRecipe = host + wordPress + posts + "/" + id + endpoint ;

// finding the chosen recipe 
async function findRecipe() {
    try {
        const response = await fetch(urlRecipe);
        const recipe = await response.json();
        const recipeTitle = recipe.title.rendered;
        const image = recipe._embedded["wp:featuredmedia"][0].source_url;
        const imageAltText = recipe._embedded["wp:featuredmedia"][0].alt_text;
        const content = recipe.content.rendered;
        
        // getting the date without the time
        let getDate = new Date(recipe.date);
        const createDate = {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        };

        const postDate = getDate.toLocaleDateString("en-GB", createDate);


        // adding name property to the title and fixed encoding 
        const title = recipeTitle;
        function removeOuterTags(inputString) {
            const parser = new DOMParser();
            const getTitle = parser.parseFromString(inputString, "text/html");
            return getTitle.body.innerText;
        }

        const inputString = `<p>${recipeTitle}</p>`;
        const newTitle = removeOuterTags(inputString);

        document.title = newTitle;

        // creating html content 
        recipeContainer.innerHTML = `<div class="above_post"><a href="recipes-list.html" class="go-back">Back to recipes!</a>
                                    <p>${postDate}</p></div>
                                        <div class="recipe">
                                            <img src="${image}" alt="${imageAltText}" id="modal_img">
                                            <dialog id="modal">
                                                <img src="${image}" alt="${imageAltText}" id="modal_img">
                                            </dialog>
                                            <h3>${recipeTitle}</h3>
                                            <div clss="content">${content}</div>
                                        </div>`;


        // making modal functional
        const modalContainer = document.getElementById("modal");
        const openModal = document.getElementById("modal_img");
        const modal = document.querySelector("dialog");

        function activateModal() {
            modalContainer.showModal();
        }

        // function closeModal(event) {
        //     if (event.target === modalContainer)
        //     modalContainer.close();
        // }

        function closeModal() {
            modalContainer.close();
        }

        openModal.addEventListener("click", activateModal);
        modal.addEventListener("click", closeModal);

        console.log(modal)

    } catch(error) {// catching if an error occours
        console.log(error);

        // displaying error message
        recipeContainer.innerHTML = errorMessage(); 

    }
}

findRecipe();