const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${
        process.env.API_KEY
      }`,
      { params: req.query }
    )
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
