const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
	date: { type: String, required: true },
	info: { type: String, required: false },
});

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
