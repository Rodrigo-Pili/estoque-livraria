"use strict";
exports.__esModule = true;
var cadastro_1 = require("./cadastro");
var vista_1 = require("./vista");
var apl;
(function (apl) {
    var Apl = /** @class */ (function () {
        function Apl() {
        }
        Apl.main = function () {
            var c = new cadastro_1.logica.Cadastro();
            var v = new vista_1.vista.Vista(c);
            c.associarVista(v);
        };
        return Apl;
    }());
    apl.Apl = Apl;
})(apl = exports.apl || (exports.apl = {}));
apl.Apl.main();
