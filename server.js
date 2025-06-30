"use strict";

const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();
const cors = require("cors");

const corsOptions = {
    origin: `http://localhost:${port}`
}
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
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
app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
}); 
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
