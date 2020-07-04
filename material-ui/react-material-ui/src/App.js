import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Typography, Container, Box} from '@material-ui/core';

import Table from './Table';

function App() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h3" gutterBottom>
                My App
            </Typography>
            <Button color="primary" variant="contained">Hello World</Button>
            <Box mt={3}>
                <Table/>
            </Box>
        </Container>
    );
}
export default App;
