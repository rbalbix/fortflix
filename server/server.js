"use strict";
exports.__esModule = true;
var json_server_1 = require("json-server");
var server = json_server_1["default"].create();
var router = json_server_1["default"].router('db.json');
var middlewares = json_server_1["default"].defaults();
var port = process.env.PORT || 8080;
server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log("JSON Server is running in " + port);
});
