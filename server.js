const app = require('./backend/app');
const debug = require("debug")("node-angular");
const http = require('http'); //default nodejs package, require imports the package into http const variable


const normalizePort = val => { //normalizePort function makes sure when we receive port we make sure its valid port number
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => { //check error than occured and notify us of what the error is 
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => { //logs that we are now listening on a specific port
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000"); //setting up port  default port of where we host site or 3000(can be number or string)



app.set("port", port); //set a config for configuration environment

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port); /*either use default port of hosting provider of side or use port 3000*/









/*const server = http.createServer((req,res) => {
    res.end("My first response")  //res has methods, one of them being .end()
}); //takes request listener as argument. req = request, res = response 
*/








