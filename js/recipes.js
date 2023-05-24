import { urlPosts } from "./imortsJS/url.js";

const recipesContainer = document.querySelector(".recipes_list");
const showMore = document.querySelector(".show-more");

async function fetchRecipes(pageNumber, numberOfRecipes) {

    // fetching the JSON and catching error message
    try {
        const getPosts = await fetch(urlPosts + `&per_page=${numberOfRecipes}&page=${pageNumber}`);
        const recipes = await getPosts.json();
        
        const recipePosts = recipes.map((recipe) => {
            const data = {
                "id": recipe.id,
                "imageURL": recipe._embedded["wp:featuredmedia"][0].source_url,
                "imageAltText": recipe._embedded["wp:featuredmedia"][0].alt_text,
                "title": recipe.title.rendered
            }
            
            return data;
        } )

        return recipePosts;



    } catch (error) { // catching if an error occours
        console.log(error);

        // displaying error message
        recipesContainer.innerHTML = errorMessage(); 
    }
}

// creating html
async function getRecipesHTML() {

   recipesContainer.innerHTML = " ";

   var pageNumber = 1;

   function creatHTML(posts) {
    return  posts.map((post) => {
        return `<a href="recipe.html?recipe=${post.id}"><div class="recipePost">
            <img src="${post.imageURL}" alt="${post.imageAltText}" />
            <h3>${post.title}</h3>
        </div></a>`
    })
    .join("");
   }

   // first posts
   const posts = await fetchRecipes(pageNumber, 10);
   
   recipesContainer.innerHTML += creatHTML(posts);

    // loading 10 more posts
    showMore.addEventListener("click", async () => {
        pageNumber ++;
        const morePosts = await fetchRecipes(pageNumber, 10);
        recipesContainer.innerHTML += creatHTML(morePosts);
    })
}

getRecipesHTML();
