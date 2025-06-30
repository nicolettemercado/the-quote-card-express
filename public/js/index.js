"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};
async function getRandomImage() {
    const client_id = "IdVOYt2xSPZl6cydhC9a0atxF1VKG_e9Qe7pNycM3_M";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json()
        console.log(returnedData)
    } catch (error) {
        console.error(error)
    }
} 
getRandomImage();{
    const client_id = "IdVOYt2xSPZl6cydhC9a0atxF1VKG_e9Qe7pNycM3_M";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
}