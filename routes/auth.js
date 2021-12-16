const router = require("express").Router();
const User = require("../models/User");

//register.
router.post("/register", async (req, res) => {
	const user = await new User({
		username: "palash",
		email: "palashasati@gmail.com",
		password: "asdjasjd",
	});
    await user.save()
    res.send("Ok")
});

module.exports = router;
