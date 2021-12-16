const router = require("express").Router();
const User = require("../models/User");

//register.
router.post("/register", async (req, res) => {
	const newUser = new User(req.body);
	try {
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
