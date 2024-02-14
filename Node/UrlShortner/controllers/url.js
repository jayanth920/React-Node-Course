const shortid = require("shortid");
const URL = require("../models/url");

//-------------------------GET ALL URLS----------------------------------

async function getUrls(req, res) {
  try {
    const urls = await URL.find({});
    return res.json(urls);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch URLs" });
  }
}

// -------------------------MAKE NEW URL---------------------------------------

async function generateNewUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Url is required" });
  const shortID = shortid();

  await URL.create({
    shortID: shortID,
    originalURL: body.url,
    visitHistory: 0,
  });
  return res.json({ id: shortID });
}

//----------------------GET ANALYTICS------------------------------------------

async function getAnalytics(req, res) { //custom for testing purposes
  try {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortID: shortId });
    return res.json({
      totalClicks: result.visitHistory,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch URL clicks" });
  }
}


module.exports = {
  generateNewUrl,
  getAnalytics,
  getUrls,
};
