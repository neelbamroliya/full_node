const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        console.log("ROUTE WORKS")
    }
})

server.listen(4050, 'localhost', () => console.log("server is running"))