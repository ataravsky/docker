const express = require('express');
const {port, db, apiUrl} = require("./configuration");
const {connectDb} = require("./helpers/db");
const app = express();
const axios = require('axios');

const startServer = () => {
	app.listen(port, () => {
		console.log(`Started auth service on port ${port}`);
		console.log(`Our database ${db}`);

	});

};

app.get('/test', (req, res) => {
	res.send("Auth server is working correctly");
});

app.get("/api/currentUser", (req, res) => {
        res.json({
                id: "1234",
                email: "a.taravsky@gmail.com"
        })
});

app.get('/testwithapidata', (req, res) => {
	axios.get(apiUrl + '/testapidata').then(response => {
		res.json({
			testapidata: response.data.testwithapi
		});
	});
});


connectDb()
	.on("error", console.log)
	.on("disconnected", connectDb)
	.once("open", startServer);
