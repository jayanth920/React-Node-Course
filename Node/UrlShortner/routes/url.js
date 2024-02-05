const express = require("express")
const { generateNewUrl, handleGetAnalytics } = require("../controllers/url")
const router = express.Router();

router.post("/", generateNewUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;