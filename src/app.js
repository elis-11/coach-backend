import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3044;
const staticDirectory = path.join(__dirname, './public');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
app.use(express.static(staticDirectory));

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: "Welcome"
    });
});

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
})