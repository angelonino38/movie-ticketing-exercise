var express = require("express");
var app = express();
const multer = require("multer");
const cors = require("cors");
var md5 = require("md5");
const sequelize = require("./db/database");
const Movie = require("./db/Movie");

sequelize.sync({ force: false }).then(() => console.log("dev is ready"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
app.use(cors());
app.use(express.json());

//Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Testing Ok" });
});

//API endpoints//

//created storage that saved in public destination folder
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public");
  },
  //create timestamp for filename
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

//created upload to save only 1 file
const upload = multer({ storage }).single("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    return res.status(200).send(req.file);
  });
});

//insert movie info
app.post("/movies", async (req, res) => {
  await Movie.create(req.body).then(() => {
    res.send("movie is inserted");
  });
});

//get movie info
app.get("/movies", async (req, res) => {
  const movieinfo = await Movie.findAll();
  res.send(movieinfo);
});

//get specific movie info
app.get("/movies/:id", async (req, res) => {
  const requestedId = req.params.id;
  const movieinfo = await Movie.findOne({ where: { id: requestedId } });
  res.send(movieinfo);
});

//update specific movie info
app.put("/movies/:id", async (req, res) => {
  const requestedId = req.params.id;
  const movieinfo = await Movie.findOne({ where: { id: requestedId } });
  movieinfo.movietitle = req.body.movietitle;
  movieinfo.timeslot = req.body.timeslot;
  await movieinfo.save();
  res.send("updated");
});

//delete specific movie info
app.delete("/movies/:id", async (req, res) => {
  const requestedId = req.params.id;
  await Movie.destroy({ where: { id: requestedId } });
  res.send("deleted");
});

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

// Start server
var HTTP_PORT = 8000;
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
