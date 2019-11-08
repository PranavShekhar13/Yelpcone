const mongoose = require('mongoose');

// Campground schema for mongoose

const campgroundSchema = new mongoose.Schema({
	name: String,
	description: String,
	image: String,
	price: Number,
	location: String,
	lat: Number,
	lng: Number,
	createdAt: {
		type: Date,
		default: Date.now
	},
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String,
		avatar: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

module.exports = mongoose.model('Campground', campgroundSchema);
