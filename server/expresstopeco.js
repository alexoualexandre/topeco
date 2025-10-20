/* eslint-disable no-undef */

const express = require("express");

const path = require("path");

const cors = require("cors");

const app = express();

const { getUser } = require("./controler/userControler.js");

app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    const whitelist = ["http://localhost:5173", "http://77.37.51.45:5002"];
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/upload", express.static(path.join(__dirname, "/upload")));

try {
  app.listen(3312, () => {
    console.log("Server is running on port 3312");
  });
} catch (err) {
  console.error("Failed to start server:", err);
}

app.get("/teste/:reponseServer", (req, res) => {
  const { reponseServer } = req.params;
  res.json({ reponse: reponseServer });
});

app.get("/get-user", getUser);
