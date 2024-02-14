const express = require("express")
const { generateNewUrl, getAnalytics, getUrls } = require("../controllers/url")
const router = express.Router();

router.get("/list", getUrls)
router.post("/generate", generateNewUrl);
router.get("/stats/:shortId", getAnalytics); //custom for testing purposes

module.exports = router;