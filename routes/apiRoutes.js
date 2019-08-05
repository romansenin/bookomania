const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "&printType=books")
    .then(results => {
      res.json(results.data);
    })
    .catch(err => {
      res.status(422).send(err);
    });
});

module.exports = router;
