import { urlPosts } from "./imortsJS/url.js";

const recipesContainer = document.querySelector(".recipes_list");
const showMore = document.querySelector(".show-more");

async function fetchRecipes(pageNumber, numberOfRecipes) {

    // fetching the JSON and catching error message
    try {
        const getPosts = await fetch(urlPosts + `&per_page=${numberOfRecipes}&page=${pageNumber}`);
        const recipes = await getPosts.json();
        
        // checking if it's an array or something else
        if (Array.isArray(recipes)) {
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
        } else {
            return null;
        }
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
    .join(""); // joining a list of html string to a single strig
   }

   // first 10 posts
   const posts = await fetchRecipes(pageNumber, 10);
   
   recipesContainer.innerHTML += creatHTML(posts);

    // loading 10 more posts for each click
    showMore.addEventListener("click", async () => {
        pageNumber ++;
        const morePosts = await fetchRecipes(pageNumber, 10);
        
        // if there is no more posts, hide the button
        if(morePosts === null) {
            showMore.style.display = "none";
        }
        // if there is less than 10 post, it means we're at the last page, so add the post and hide the button
        else if (morePosts.length < 10) {
            showMore.style.display = "none";
            recipesContainer.innerHTML += creatHTML(morePosts);
        } else {
            recipesContainer.innerHTML += creatHTML(morePosts);
        }
    })
}

getRecipesHTML();
