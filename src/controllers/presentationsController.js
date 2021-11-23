import PresentationsModel from '../models/presentationsModel.js';

export const getAllPresentations = async () => {
	const presentations = await PresentationsModel.find({});
	return presentations;
}