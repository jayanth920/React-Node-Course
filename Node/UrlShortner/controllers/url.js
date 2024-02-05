const shortid = require('shortid');
const URL = require('../models/url');

async function generateNewUrl (req,res){
    const body = req.body
    if(!body.url) return res.status(400).json({error : "Url is required"})
    const shortID = shortid();
  
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory:0
    })
return res.json({id : shortID});
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortID: shortId });
    return res.json({
      totalClicks: result.visitHistory
    });
  }
  
  module.exports = {
    generateNewUrl,
    handleGetAnalytics
  };
  