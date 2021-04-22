import React, {useState, useEffect} from 'react';
import axiosInstance from "../axios";
import requests from "../requests";

import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axiosInstance.get(requests.fetchNetflixOriginals);
            const randomIndex = Math.floor(Math.random() * request.data.results.length);
            setMovie (request.data.results[randomIndex]);
            return request;
        }
        console.log("in useEffect: movie" + movie);
        fetchData().then(() => {
            console.log("in useEffect after fetchData: movie" + movie)
        });
    }, []);

    console.log("after useEffect: movie" + movie);

    const truncate = (str, n) =>
        str?.length > n ? str.substr(0, n - 1) + "..." : str;


    return (
        <div>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(https://wallpaperaccess.com/full/493220.jpg)`,
                    backgroundPosition: "center center"
                }}>
                <div className="banner_contents">
                    <h1 className = "banner_title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>

                    <h1 className="banner_description">
                        {truncate(movie?.overview, 150)}
                    </h1>

                    <div className="banner_fadeBottom"/>

                </div>
            </header>

        </div>
    );
}

export default Banner;