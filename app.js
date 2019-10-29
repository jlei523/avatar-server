import express from "express";
// const { convert } = require("convert-svg-to-png");
var cors = require("cors");

const { performance } = require("perf_hooks");
var compression = require("compression");

// React Components
import React from "react";
import RDS from "react-dom/server";
import Avataaars from "avataaars";

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

app.get("/ten", async (req, res) => {
  const t0 = performance.now(); //start timer

  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  const appString2 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="WinterHat4"
      accessoriesType="Round"
      hatColor="Blue03"
      facialHairType="Blank"
      clotheType="GraphicShirt"
      clotheColor="PastelBlue"
      graphicType="Cumbia"
      eyeType="Squint"
      eyebrowType="AngryNatural"
      mouthType="Disbelief"
      skinColor="Tanned"
    />
  );
  const appString3 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="LongHairCurly"
      accessoriesType="Prescription02"
      hairColor="Platinum"
      facialHairType="BeardMedium"
      facialHairColor="Blonde"
      clotheType="CollarSweater"
      clotheColor="Gray01"
      eyeType="Squint"
      eyebrowType="RaisedExcited"
      mouthType="Grimace"
      skinColor="Light"
    />
  );
  const appString4 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="LongHairStraight2"
      accessoriesType="Wayfarers"
      hairColor="Platinum"
      facialHairType="Blank"
      facialHairColor="Platinum"
      clotheType="BlazerSweater"
      clotheColor="PastelOrange"
      eyeType="Surprised"
      eyebrowType="UpDown"
      mouthType="Tongue"
      skinColor="Pale"
    />
  );
  const appString5 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="Hijab"
      accessoriesType="Prescription02"
      hatColor="Blue03"
      hairColor="PastelPink"
      facialHairType="MoustacheFancy"
      facialHairColor="BlondeGolden"
      clotheType="ShirtVNeck"
      clotheColor="PastelBlue"
      eyeType="Wink"
      eyebrowType="SadConcerned"
      mouthType="Smile"
      skinColor="Pale"
    />
  );
  const appString6 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="LongHairShavedSides"
      accessoriesType="Prescription02"
      hairColor="SilverGray"
      facialHairType="BeardMagestic"
      facialHairColor="Auburn"
      clotheType="ShirtVNeck"
      clotheColor="Red"
      eyeType="Hearts"
      eyebrowType="AngryNatural"
      mouthType="Eating"
      skinColor="Yellow"
    />
  );
  const appString7 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="LongHairBun"
      accessoriesType="Round"
      hairColor="Brown"
      facialHairType="BeardMedium"
      facialHairColor="Platinum"
      clotheType="BlazerSweater"
      clotheColor="Gray02"
      eyeType="Squint"
      eyebrowType="SadConcernedNatural"
      mouthType="Default"
      skinColor="Tanned"
    />
  );
  const appString8 = RDS.renderToString(
    <Avataaars
      avatarStyle="Circle"
      topType="ShortHairDreads02"
      accessoriesType="Round"
      hairColor="Brown"
      facialHairType="BeardLight"
      facialHairColor="Auburn"
      clotheType="ShirtCrewNeck"
      clotheColor="Blue02"
      eyeType="Happy"
      eyebrowType="UpDown"
      mouthType="Concerned"
      skinColor="Light"
    />
  );

  const t1 = performance.now(); //start timer
  const responseTime = t1 - t0; //responsetime in ms

  console.log(responseTime);

  console.log("get /ten");
  const obj = [
    appString,
    appString2,
    appString3,
    appString4,
    appString5,
    appString6,
    appString7,
    appString8
  ];

  res.json(obj);
});

// app.get("/png/:width?", async (req, res) => {
//   const appString = RDS.renderToString(<Avataaars {...req.query} />);

//   const png = await convert(appString, {
//     width: parseInt(req.params.width || 500, 10),
//     puppeteer: {
//       args: ["--no-sandbox", "--disable-setuid-sandbox"]
//     }
//   });

//   res.set("Content-Type", "image/png");
//   res.end(png);
// });

// catch 404 and forward to error handler
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
