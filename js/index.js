import {urlFeatured, host, wordPress, posts, endpoint} from "/js/imortsJS/url.js";

async function getFeaturedPosts() {

    // fetching the JSON and catching error message
    try {
        const getFeaturedPosts = await fetch(urlFeatured);
        const featuredPosts = await getFeaturedPosts.json();

        return featuredPosts.map((recipe) => {
            const data = {
                "id": recipe.id,
                "imageURL": recipe._embedded["wp:featuredmedia"][0].source_url,
                "imageAltText": recipe._embedded["wp:featuredmedia"][0].alt_text,
                "title": recipe.title.rendered,
                "text": recipe.excerpt.rendered
            }
            return data;
        })
    } catch (error) { // catching if an error occours
        console.log(error);

        // displaying error message
        carousel.innerHTML = errorMessage(); 
    }
}

// creating html
async function carousel() {
    const getData = await getFeaturedPosts();

    const slider = document.querySelector(".slider");

    const firstPostClone = `<div class="post" id="firstPostClone">
                                <img src="${getData[0].imageURL}" alt="${getData[0].imageAltText}" />
                                <h3>${getData[0].title}</h3>
                                <p>${getData[0].text}</p>
                                <a href="recipe.html?recipe=${getData[0].id}"><button>Show More</button></a>
                            </div>`;

    // getting the last featured post
    const end = getData.length - 1;
    const lastPostClone = `<div class="post" id="lastPostClone">
                            <img src="${getData[end].imageURL}" alt="${getData[end].imageAltText}" />
                            <h3>${getData[end].title}</h3>
                            <p>${getData[end].text}</p>
                            <a href="recipe.html?recipe=${getData[end].id}"><button>Show More</button></a>
                        </div>`;
    
    function creatingFeaturedHTML(posts) {
        return posts.map((post) => {
            return `<div class="post">
                        <img src="${post.imageURL}" alt="${post.imageAltText}" />
                        <h3>${post.title}</h3>
                        <p>${post.text}</p>
                        <a href="recipe.html?recipe=${post.id}"><button>Show More</button></a>
                    </div>`;
        })
        .join(""); // joining a list of html string to a single strig
    }

    slider.innerHTML = lastPostClone + creatingFeaturedHTML(getData) + firstPostClone;
}

carousel();