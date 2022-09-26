//all imports
const express = require('express');
const app = express();

//port number
const port = 3000;

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index');
})

//listen on port 4000 and log current time and date
app.listen(port, () => console.log(`Listening to http://localhost:${port}`));