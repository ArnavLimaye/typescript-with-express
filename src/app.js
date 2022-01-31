"use strict";
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
exports.app = (0, express_1["default"])();
var port = 4200;
var hello = function () {
    console.log('hello');
};
exports.app.get('/', function (req, res) {
    res.status(200);
    res.send(hello);
});
exports.app.listen(port, function () {
    console.log("Hello world app listening on port ".concat(port));
});
