const express = require("express");
const router = express.Router();
const { addLeagueAdmin } = require("../controllers/adminController");
const { adminProtect } = require("../middleware/auth");

router.route("/addLeagueAdmin").post(adminProtect, addLeagueAdmin);

module.exports = router;