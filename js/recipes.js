import { urlPosts } from "./imortsJS/url.js";

const recipesContainer = document.querySelector(".recipes_list");

async function getRecipesPosts() {

    // fetching the JSON and catching error message
    try {
        const getPosts = await fetch(urlPosts);
        const recipes = await getPosts.json();

        recipesContainer.innerHTML = " ";
    
        for (let i = 0; i < recipes.length; i++) {
            const recipeImage = recipes[i]._embedded["wp:featuredmedia"][0].source_url;
            const recipeImageAltText = recipes[i]._embedded["wp:featuredmedia"][0].alt_text;
            const recipesTitle = recipes[i].title.rendered;

            console.log(recipeImageAltText)

            // creating html
            recipesContainer.innerHTML += `<a href="recipe.html?recipe=${recipes[i].id}"<div class="recipePost">
                                            <img src="${recipes[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${recipes[i]._embedded["wp:featuredmedia"][0].alt_text}">
                                            <h3>${recipes[i].title.rendered}</h3>
                                            </div></a>`;
      
        }

    } catch (error) { // catching if an error occours
        console.log(error);

        // displaying error message
        recipesContainer.innerHTML = errorMessage(); 
    }
}

getRecipesPosts();