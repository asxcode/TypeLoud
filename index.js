const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname,'assets/')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log(`App listening on port: ${port}`);
});