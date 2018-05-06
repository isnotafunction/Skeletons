const express = require('express');
const path = require('path');
const controllers = require('./controllers/router');
const exphbs = require('express-handlebars');
const app = express();

app.post('/register');
app.post('/login');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

app.listen(3000, () => console.log('the server is listening on port 3000'));
