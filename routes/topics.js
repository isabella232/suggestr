const express = require('express');
const router = express.Router();
const suggestion = require('../module/suggestion');

router.get('/single/:topicName', async (req, res) => {
	const verbose = req.query.verbose ? req.query.verbose === 'true' : true;
	const exclude = req.query.exclude ? req.query.exclude : [];
	const result = await suggestion.concepts(
		req.params.topicName,
		verbose,
		exclude
	);
	res.status(200).json(result);
	return;
});

router.get('/multiple/', async (req, res) => {
	const verbose = req.query.verbose ? req.query.verbose === 'true' : true;
	const exclude = req.query.exclude ? req.query.exclude : [];
	const topics = req.query.topics.split(',');
	const result = await suggestion.concepts(topics, verbose, exclude);
	res.status(200).json(result);
	return;
});

module.exports = router;
