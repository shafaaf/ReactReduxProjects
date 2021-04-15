import React from 'react';
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axiosInstance.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();

    }, [fetchUrl]);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie => {
                        return <img key = {movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${baseUrl}${isLargeRow? movie.poster_path: movie.backdrop_path }`}
                            alt={movie.name}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Row;
