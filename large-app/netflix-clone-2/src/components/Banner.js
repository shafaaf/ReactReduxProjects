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
        fetchData().then(() => console.log(movie));
    }, []);

    return (
        <div>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(https://www.irmi.com/images/default-source/article-images/aviation/boeing-737.jpg?sfvrsn=4)`,
                    backgroundPosition: "center center"
                }}

            >
                <div className="banner_contents">

                </div>
            </header>

        </div>
    );
}

export default Banner;