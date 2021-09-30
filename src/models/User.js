const mongoose = require("mongoose");

const schema = mongoose.Schema({
	name: String,
	username: String,
	password: String,
	last_acess: Date
}, {
	versionKey: false
});

const User = mongoose.model("User", schema);

module.exports = User;