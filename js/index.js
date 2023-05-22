import {urlFeatured, host, wordPress, posts, endpoint} from "/js/imortsJS/url.js";

async function getSliderPosts() {

    // fetching the JSON and catching error message
    try {
        const getFeaturedPosts = await fetch(urlFeatured);
        const featuredPosts = await getFeaturedPosts.json();
    
        for (let i = 0; i < featuredPosts.length; i++) {
            // const getFeaturedTitle = featuredPosts[i].title;
            // const featuredTitle = getFeaturedTitle.rendered;
            // const featuredImages = featuredPosts[i]._embedded["wp:featuredmedia"][0].source_url;
            // const featuredAltText = featuredPosts[i]._embedded["wp:featuredmedia"][0].alt_text;
            
            // creating the slider on home page
            slider.innerHTML = `<div class="post" id="lastPostClone">
                                    <img src="${featuredPosts[3]._embedded["wp:featuredmedia"][0].source_url}" alt="${featuredPosts[3]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${featuredPosts[3].title.rendered}</h3>
                                    <p>${featuredPosts[3].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${featuredPosts[0]._embedded["wp:featuredmedia"][0].source_url}" alt="${featuredPosts[0]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${featuredPosts[0].title.rendered}</h3>
                                    <p>${featuredPosts[0].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${featuredPosts[1]._embedded["wp:featuredmedia"][0].source_url}" alt="${featuredPosts[1]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${featuredPosts[1].title.rendered}</h3>
                                    <p>${featuredPosts[1].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${featuredPosts[2]._embedded["wp:featuredmedia"][0].source_url}" alt="${featuredPosts[2]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${featuredPosts[2].title.rendered}</h3>
                                    <p>${featuredPosts[2].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post">
                                    <img src="${featuredPosts[3]._embedded["wp:featuredmedia"][0].source_url}" alt="${featuredPosts[3]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${featuredPosts[3].title.rendered}</h3>
                                    <p>${featuredPosts[3].excerpt.rendered}</p>
                                    <button>Show More</button>
                                </div>
                                <div class="post" id="firstPostClone">
                                    <img src="${featuredPosts[0]._embedded["wp:featuredmedia"][0].source_url}" alt="${featuredPosts[0]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <h3>${featuredPosts[0].title.rendered}</h3>
                                    <p>${featuredPosts[0].excerpt.rendered}</p>
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