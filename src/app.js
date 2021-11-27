import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import * as SpeakersController from './controllers/speakersController.js';
import * as PresentationsController from './controllers/presentationsController.js';
import * as SponsorsController from './controllers/sponsorsController.js';

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
		pageTitle: "Welcome",
		
	});
});

app.get('/speakers', async (req, res) => {
	res.render('speakers', {
		pageTitle: "Speakers",
		speakers: await SpeakersController.getAllSpeakers(),
		sponsors: await SponsorsController.getAllSponsors()
	});
});

app.get('/presentations', async (req, res) => {
	res.render('presentations', {
		pageTitle: "Presentations",
		presentations: await PresentationsController.getAllPresentations()
	});
});

app.get('/sponsors', async (req, res) => {
	res.render('sponsors', {
		pageTitle: "Sponsors",
		sponsors: await SponsorsController.getAllSponsors()
	});
});

app.listen(port, () => {
	console.log(`Now listening on port http://localhost:${port}`);
});