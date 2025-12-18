const asyncHandler = require("express-async-handler");
const Info = require("../models/infoModel");

const getInfoData = asyncHandler(async (req, res) => {
	try {
		const info = await Info.findOne({});
		res.status(200).json(info || {});
	} catch (error) {
		res.status(500);
		throw new Error(error.message);
	}
});

const upsertInfoData = asyncHandler(async (req, res) => {
	try {
		// create if none, update if exists
		const info = await Info.findOneAndUpdate(
			{}, // find any document
			req.body, // update with data
			// TODO: LEARN THIS
			{ new: true, upsert: true }
		);

		res.status(200).json(info);
	} catch (error) {
		res.status(500);
		throw new Error(error.message);
	}
});

module.exports = {
	getInfoData,
	upsertInfoData,
};
