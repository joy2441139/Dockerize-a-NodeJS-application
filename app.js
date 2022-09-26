//all imports
const func = require('./public/js/script.js');
const express = require('express');
const app = express();

//port number
const port = 3000;

const now = new Date();

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

//set views
app.set('views', './views');
app.set('view engine', 'ejs');

//get method to render index.ejs
app.get('', (req, res) => {
    res.render('index');
})

//listen on port 3000 and log current time and date
app.listen(port, () => console.log(`Listening to http://localhost:${port} \nCurrent Time: ${func.formatTime(now)} \nCurrent Date: ${func.formatDate(now)}`));