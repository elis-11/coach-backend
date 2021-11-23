import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import * as SpeakersController from './controllers/speakersController.js';
import * as PresentationsController from './controllers/presentationsController.js';

mongoose.connect('mongodb://localhost:27017/mongoConference');

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3044;
const staticDirectory = path.join(__dirname, './public');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(staticDirectory));

app.get('/', (req, res) => {
	res.render('index', {
		pageTitle: "Welcome"
	});
});

app.get('/speakers', async (req, res) => {
	res.render('speakers', {
		pageTitle: "Speakers",
		speakers: await SpeakersController.getAllSpeakers()
	});
});

app.get('/presentations', async (req, res) => {
	res.render('presentations', {
		pageTitle: "Presentations",
		presentations: await PresentationsController.getAllPresentations()
	});
});

app.listen(port, () => {
	console.log(`Now listening on port http://localhost:${port}`);
});