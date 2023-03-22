const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/typeloud')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR: Database connection error.'));

db.once('open', function(){
    console.log('OK: Connected to database!');
});