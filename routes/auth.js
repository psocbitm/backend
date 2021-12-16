const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//register.
router.post("/register", async (req, res) => {
	try {
		//generate new password.
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		//create new user.
		const newUser = new User(req.body);
		//copying hashed password.
		newUser.password = hashedPassword;

		//save user and repond.
		const user = await newUser.save();

		res.status(200).json(user);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
