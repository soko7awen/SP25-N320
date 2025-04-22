const router = require("express").Router();

const cats = [
    { name: "Tabby", color: ["black", "white"]},
    { name: "Persian", color: ["beige", "white"]}
];

router.get("/cats", function (req, res) {
    res.status(200).json(cats);
});

router.get("/cats/color/:color", function(req, res) {
    const filteredCats = cats.filter((cat) => {
        return cat.color.includes(req.params.color);
    });
    res.status(200).json(filteredCats);
})

module.exports = router;