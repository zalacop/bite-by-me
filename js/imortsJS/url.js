// creating the API url
export const host = "https://www.webupload.no";
export const wordPress = "/wp-json/wp/v2";
export const posts = "/posts";
export const endpoint = "?_embed&per_page=20";
export const featured = "?_embed&tags=4";

export const urlPosts = host + wordPress + posts + endpoint; 
export const urlFeatured = host + wordPress + posts + featured;