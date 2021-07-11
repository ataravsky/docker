const express = require('express');
const {port, db, authApiUrl} = require("./configuration");
const {connectDb} = require("./helpers/db");
const app = express();
const mongoose = require("mongoose");
const axios =require('axios');

const postSchema = new mongoose.Schema({
	name: String
});
const Post = mongoose.model("Post", postSchema);

const startServer = () => {
	app.listen(port, () => {
		console.log(`Started api service on port ${port}`);
		console.log(`Our database ${db}`);

		const silence = new Post({ name: "Silence" });
		silence.save(function(err, savedSilence) {
			if (err) return console.error(err);
			console.log("savedSilence", savedSilence);
		});

		Post.find(function(err, posts) {
                        if (err) return console.error(err);
                        console.log('posts', posts);
                });
	});
};

app.get('/test', (req, res) => {
	res.send("Server is working correctly");
});

app.get('/api/auth/currentUser', (req, res) => {
	axios.get(authApiUrl + '/currentUser').then(response => {
		res.json({
			testWitchCurrentUser: true,
			currentUserFromAuth: response.data
		});
	});
});

app.get('/api/testapidata', (req, res) => {
	res.json({
		testwithapi: true
	});
});

connectDb()
	.on("error", console.log)
	.on("disconnected", connectDb)
	.once("open", startServer);
