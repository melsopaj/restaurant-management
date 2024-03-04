const jsonServer = require("json-server");

const jsonServerPort = 8080;

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.use(middlewares);

//const restaurantsRoutes = require("./routes/restaurants");
//const menulistRoutes = require("./routes/menulist");

//restaurantsRoutes(server);
//menulistRoutes(server);

server.listen(jsonServerPort, () =>{
    console.log(`JSON Server is running on ${jsonServerPort}`);
});