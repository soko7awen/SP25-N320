const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile")
/**
 * 
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */

function app(req, res) {
    const fileReq = new WebFile(req.url);
    var filePath = path.join(__dirname, "views", fileReq.filename);
    if (fs.existsSync(filePath) && fileReq.getExtension()) {
        res.writeHead(200, { "Content-Type": fileReq.getMimeType() });
        res.write(fs.readFileSync(filePath));
    } else if (!fileReq.getExtension() && fs.existsSync(`${filePath}.html`)) {
        filePath = `${filePath}.html`;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(filePath));
    } else if (!fileReq.getExtension() && fs.existsSync(path.join(filePath, "index.html"))) {
        filePath = path.join(filePath, "index.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(filePath));
    } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h2 style='text-align:center'>H.W.S (Haven's Web Server)</h2>");
        res.write(`File Requested: ${filePath}<br>`)
        res.write(`<p>${fileReq.getMimeType()}</p>`);
    }
    res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 5445;

server.listen(port);