const mongoose = require('mongoose');
const url_database = 'mongodb://localhost/unju_database';

mongoose.connect(url_database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log('Database connected'))
.catch(err => console.error(err));