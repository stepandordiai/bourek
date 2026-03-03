const express = require("express");
const {
	getInfoData,
	upsertInfoData,
} = require("../controllers/infoController");

const router = express.Router();

router.get("/", getInfoData);

router.put("/", upsertInfoData);

module.exports = router;
