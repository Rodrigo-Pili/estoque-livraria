"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = require("./cadastro");
const vista_1 = require("./vista");
var apl;
(function (apl) {
    class Apl {
        static main() {
            let c = new cadastro_1.logica.Cadastro();
            let v = new vista_1.vista.Vista(c);
            c.associarVista(v);
        }
    }
    apl.Apl = Apl;
})(apl = exports.apl || (exports.apl = {}));
apl.Apl.main();
//# sourceMappingURL=main.js.map