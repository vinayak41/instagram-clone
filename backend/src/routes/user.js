const express = require("express");
const router = express.Router();
const { getUser, createUser, login, getUserProfile } = require("../controllers/user");

router.get("/:id", getUser);
router.post("/login", login);
router.post("/register", createUser);
router.get("/profile/:username", getUserProfile);

module.exports = router;
