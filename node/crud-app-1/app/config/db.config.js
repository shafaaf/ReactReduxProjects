const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;
