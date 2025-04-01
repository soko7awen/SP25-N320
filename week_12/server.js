const express = require('express');
const path = require("path");

const app = express();

app.use(
    express.static(
        path.join(__dirname, "views")
    )
);


app.get("/*page/", function (req, res){
    res.sendFile(path.join(__dirname, "views/404.html"));
})

// app.get('/', function(req,res,next) {
//     res.send('<h1>Home</h1>');
// });

const port = process.env.PORT || 14753;

app.listen(port);

console.log(`Server running: http://localhost:${port}`);