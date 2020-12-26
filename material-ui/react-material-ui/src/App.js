import React from 'react';
import {Button, Typography, Container, Box} from '@material-ui/core';

import Table from './Table';

function App() {
    return (
        <Container maxWidth="sm">
            <Typography align='center' variant="h3" gutterBottom>
                My App
            </Typography>
            <Box textAlign='center'>
                <Button color="primary" variant="contained">Hello World</Button>
                <Box mt={3}>
                    <Table/>
                </Box>
            </Box>
        </Container>
    );
}
export default App;
