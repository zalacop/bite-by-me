// creating the API url
export const host = "https://www.webupload.no";
export const wordPress = "/wp-json/wp/v2";
export const posts = "/posts";
export const endpoint = "?_embed&";
export const featured = "?_embed&tags=5";

export const urlPosts = host + wordPress + posts + endpoint; 
export const urlFeatured = host + wordPress + posts + featured;

// https://www.webupload.no/wp-json/wp/v2/posts?_embed&per_page=10