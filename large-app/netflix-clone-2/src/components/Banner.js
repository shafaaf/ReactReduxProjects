import React, {useState, useEffect} from 'react';
import axiosInstance from "../axios";
import requests from "../requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axiosInstance.get(requests.fetchNetflixOriginals);
            const randomIndex = Math.floor(Math.random() * request.data.results.length);
            setMovie (request.data.results[randomIndex]);
            return request;
        }
        //fetchData().then(() => console.log("hi" + movie));
    });

    return (
        <div>

        </div>
    );
}

export default Banner;