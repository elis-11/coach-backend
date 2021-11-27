import mongoose from 'mongoose';

const sponsorsSchema = mongoose.Schema({
	name: String,
	location: String
});
const SponsorsModel = mongoose.model("Sponsor", sponsorsSchema);

export default SponsorsModel;