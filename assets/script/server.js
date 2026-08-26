const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        fs.readFile("../../about.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (req.url === "/about") {

        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else {

        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page non trouvee</h1>");

    }
});

server.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});
