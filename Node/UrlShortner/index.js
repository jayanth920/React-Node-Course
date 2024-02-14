const dotenv = require("dotenv")
const express = require("express");
const app = express();
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
var cors = require('cors');

//------------------------CONFIG - ENV etc----------------------------------------
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL

//----------------------MONGODB CONNECTION------------------------------------------
connectToMongoDB(MONGODB_URL).then(() =>
console.log("Mongodb connected")
);

//--------------------------MIDDLEWARE--------------------------------------
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

//-----------------------ROUTE-----------------------------------------
app.use("/api", urlRoute);


//-----------------SPECIAL ROUTE FOR REDIRECT AND VISIT HISTORY COUNT-----------------------
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  console.log("Requested shortId:", shortId);

  const entry = await URL.findOneAndUpdate(
    { shortID: shortId },
    { $inc: { visitHistory: 1 } },
    { new: true }
  );

  if (entry) {
    // Document found, log and redirect
    console.log("Entry:", entry);
    res.redirect(entry.originalURL);
  } else {
    // Document not found, handle accordingly (e.g., send an error response)
    console.log("Entry not found for shortId:", shortId);
    res.status(404).send("Not Found");
  }
});


app.listen((PORT), () => {
    console.log(`Server Running on port ${PORT}`);
})

// const express = require("express");
// const { connectToMongoDB } = require("./connect");
// const urlRoute = require("./routes/url");
// const URL = require("./models/url");

// const app = express();
// const PORT = 8000;

// connectToMongoDB("mongodb://localhost:27017/shortUrl").then(() =>
//   console.log("Mongodb connected")
// );

// app.use(express.json());

// app.use("/url", urlRoute);

// app.get("/:shortId", async (req, res) => {
//   const shortId = req.params.shortId;
//   console.log("Requested shortId:", shortId);

//   const entry = await URL.findOneAndUpdate(
//     { shortID: shortId },
//     { $inc: { visitHistory: 1 } },
//     { new: true }
//   );

//   if (entry) {
//     // Document found, log and redirect
//     console.log("Entry:", entry);
//     res.redirect(entry.redirectURL);
//   } else {
//     // Document not found, handle accordingly (e.g., send an error response)
//     console.log("Entry not found for shortId:", shortId);
//     res.status(404).send("Not Found");
//   }
// });
   

// app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
