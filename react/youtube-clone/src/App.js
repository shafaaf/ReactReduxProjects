import React from 'react';
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

import {SearchBar, VideoDetail, VideoList} from './components'

require('dotenv').config();

class App extends React.Component {

    handleSubmit = async (searchTerm) => {
        console.log("searchTerm is: ", searchTerm);
        const response = await youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm
            }
        });
        console.log("process.env.REACT_APP_API_KEY is: ", process.env.REACT_APP_API_KEY);
        console.log("response is: ", response);
    };

      render() {
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
      }
}

export default App;
