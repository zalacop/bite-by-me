// creating the API url

const localHost = "https://www.webupload.no";
const wordPress = "/wp-json/wp/v2";
const posts = "/posts";


const urlPosts = localHost + wordPress + posts + "/?_embed&per_page=20"; 