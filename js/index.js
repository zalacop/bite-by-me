import {urlPosts, localHost, wordPress, posts, endpoint} from "/js/imortsJS/url.js";

async function getSliderPosts() {

    // fetching the JSON and catching error message
    try {
        const getPosts = await fetch(urlPosts);
        const posts = await getPosts.json();
    
        for (let i = 0; i < posts.length; i++) {
            // const getTitle = posts[i].title;
            // const postTitle = getTitle.rendered;
            // const postImages = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            // const altText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;
            // const postText = posts[i].excerpt.rendered;
    
            // creating the slider on home page
            slider.innerHTML = `<div class="post" id="lastPostClone">
                                    <img src="${posts[8]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[8]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${posts[8].title.rendered}</h3>
                                    <p>${posts[8].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${posts[1]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[1]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${posts[1].title.rendered}</h3>
                                    <p>${posts[1].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${posts[3]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[3]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${posts[3].title.rendered}</h3>
                                    <p>${posts[3].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${posts[6]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[6]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${posts[6].title.rendered}</h3>
                                    <p>${posts[6].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${posts[8]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[8]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${posts[8].title.rendered}</h3>
                                    <p>${posts[8].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post" id="firstPostClone">
                                    <h3>${posts[1].title.rendered}</h3>
                                    <p>${posts[1].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>`
        }

    } catch (error) { // catching if an error occours
        console.log(error);

        // displaying error message
        carousel.innerHTML = errorMessage(); 
    }
}

getSliderPosts();