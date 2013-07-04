
// Local server module
var server = require("./server");
// Local router module
var router = require("./router");
// Local requestHandler module
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"]  = requestHandlers.start;
handle["/uplaod"] = requestHandlers.upload;


server.start(router.route, handle);