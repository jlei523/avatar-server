import express from "express";
// const { convert } = require("convert-svg-to-png");
var cors = require("cors");

const { performance } = require("perf_hooks");
var compression = require("compression");

const generateRandomSVG = require("./randomGenerator");

// React Components
import React from "react";
import RDS from "react-dom/server";
import Avataaars from "avatars-background-color";

const app = express();
app.use(cors());
app.use(compression());

app.get("/", async (req, res) => {
  const t0 = performance.now(); //start timer

  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  const t1 = performance.now(); //start timer
  const responseTime = t1 - t0; //responsetime in ms
  console.log(responseTime);

  res.writeHead(200, {
    "Content-Type": "image/svg+xml"
  });
  res.end(appString);
});

app.get("/svg/:count", async (req, res) => {
  const t0 = performance.now(); //start timer

  const numSVGs = req.params.count || 9;
  const svgs = [];

  for (let i = 0; i < numSVGs; i++) {
    const randomSVGObj = generateRandomSVG();
    svgs.push(RDS.renderToString(<Avataaars {...randomSVGObj} />));
  }

  const t1 = performance.now(); //start timer
  const responseTime = t1 - t0; //responsetime in ms

  res.json(svgs);
});

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

module.exports = app;
