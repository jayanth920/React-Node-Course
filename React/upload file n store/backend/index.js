const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require("cors")

const app = express();
const PORT = 8000;

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'content/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.fields([{name:"image1", maxCount:1},{name:"image2", maxCount:1}]), (req, res) => {
  console.log(req.files['image1'][0])
  res.status(200).send('Files uploaded successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
