import SpeakersModel from '../models/SpeakersModel.js';

export const getAllSpeakers = async () => {
	const speakers = await SpeakersModel.find({});
	return speakers;
}