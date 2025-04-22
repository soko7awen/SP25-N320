const express = require('express');
const path = require("path");

const app = express();

app.use("/api", require("./api"));

app.use(
    express.static(
        path.join(__dirname, "views")
    )
);


app.get("/*page.html", function (req, res) {
    res.redirect("/404.html");
});

const port = process.env.PORT || 14753;

app.listen(port);

console.log(`Server running: http://localhost:${port}`);