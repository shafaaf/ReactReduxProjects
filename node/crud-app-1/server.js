const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use('/api',require('./routes/api'));


app.get('/api', (req, res) =>
    res.send('Its working!'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
