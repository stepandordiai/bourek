const express = require("express");
const mongoose = require("mongoose");
const infoRoute = require("./routes/infoRoute");
const cors = require("cors");

const app = express();

// List of allowed origins (admin + public site)
const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:5174",
	"https://bourek-admin.netlify.app",
	"https://bourek.cz",
	"https://www.bourek.cz",
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			}
		},
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api", infoRoute);

app.get("/", (req, res) => {
	res.send("Hello Traveller...");
});

app.get("/health", (req, res) => {
	res.status(200).send("ok");
});

mongoose.set("strictQuery", false);
mongoose
	.connect(
		"mongodb+srv://stepandordiaiBdWcumZOkcl:Overwatch1@stepandordiaiapi.1ocur.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=StepanDordiaiAPI"
	)
	.then(() => {
		console.log("Connected to MongoDB database");
		app.listen(3000, () => {
			console.log(`Bourek crud web service is running on port 3000`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
