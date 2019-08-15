const express = require("express");
const app = express();
const parser = require("body-parser");
const port = 3000;
const { getYoutuberData } = require("./APIHelpers");
app.use(parser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/getYoutuberData", (req, res) => {
  getYoutuberData(req.query.username)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("Error with endpoint /getYoutuberData", err);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
