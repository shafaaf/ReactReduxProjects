import React, {useState} from 'react';

import Search from "./Components/Search";
import Results from "./Components/Results";
import Popup from "./Components/Popup";

const axios = require('axios');
require('dotenv').config()

function App() {
    const [state, setState] = useState({
        searchQuery: "",
        results: [],
        selected: {}
    });

    const apiUrl = "https://www.omdbapi.com/?apikey=" + process.env.REACT_APP_API_KEY;

    const search = (e) => {
        if (e.key === "Enter") {
            const url = apiUrl + '&s=' + state.searchQuery;
            axios(url)
                .then(({data}) => {
                    const results = data.Search;
                    console.log("results is: ", results);
                    if (results === undefined || results.length === 0) {
                        return;
                    }
                    setState(prevState => {
                        return {
                            ...prevState, results: results
                        };
                    });
            });
        }
    };

    const handleInput = (e) => {
        const searchQuery = e.target.value;
        setState(prevState => {
            return {
                ...prevState, searchQuery: searchQuery
            };
        });
    };

    const openPopup = id => {
        const url = apiUrl + '&i=' + id;
        axios(url)
            .then(({data}) => {
                const result = data;
                setState(prevState => {
                    return {
                        ...prevState, selected: result
                    };
                });
            });
    };

    const closePopup = () => {
        setState(prevState => {
            return {
                ...prevState, selected: {}
            };
        });
    };


    return (
        <div className="App">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search}/>
                <Results results={state.results} openPopup={openPopup}/>

                {(typeof state.selected.Title != "undefined") ?
                    <Popup selected={state.selected} closePopup={closePopup} /> : false}

            </main>
        </div>
    );
}

export default App;
