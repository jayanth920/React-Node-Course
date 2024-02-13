const express = require("express")
const { generateNewUrl, handleGetAnalytics, listUrls } = require("../controllers/url")
const router = express.Router();

router.get("/", listUrls)
router.post("/", generateNewUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;