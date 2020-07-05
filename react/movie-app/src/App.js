import React, {useState} from 'react';
import Search from "./Components/Search";

function App() {
    const [state, setState] = useState({
        searchQuery: "",
        results: [],
        selected: {}
    });
    const apiUrl = "http://www.omdbapi.com/?apikey=55917a51";

    const handleInput = (e) => {
        const searchQuery = e.target.value;
        setState(prevState => {
            return {
                ...prevState, searchQuery: searchQuery
            };
        });
    };

    return (
        <div className="App">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput={handleInput}/>
            </main>
        </div>
    );
}

export default App;
