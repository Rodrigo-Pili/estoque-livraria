"use strict";
exports.__esModule = true;
var logica;
(function (logica) {
    var Estado;
    (function (Estado) {
        Estado[Estado["INICIADO"] = 1] = "INICIADO";
        Estado[Estado["AGUARDANDO"] = 2] = "AGUARDANDO";
        Estado[Estado["PENDENTE"] = 3] = "PENDENTE";
        Estado[Estado["BUSCANDO"] = 4] = "BUSCANDO";
        Estado[Estado["ENCERRADO"] = 5] = "ENCERRADO";
        Estado[Estado["CANCELADO"] = 6] = "CANCELADO";
    })(Estado = logica.Estado || (logica.Estado = {}));
    var Cadastro = /** @class */ (function () {
        function Cadastro() {
            this.n = 0;
            this.estado = Estado.INICIADO;
        }
        Cadastro.prototype.associarVista = function (v) {
            this.vista = v;
        };
        Cadastro.prototype.cadastrar = function () {
            this.n--;
            this.estado = Estado.ENCERRADO;
            this.vista.habilitarCadastrar(false);
            this.vista.habilitarSuspender(false);
            this.vista.habilitarCancelar(false);
            this.vista.mostrar("ENCERRADO");
        };
        Cadastro.prototype.suspender = function () {
            this.estado = Estado.PENDENTE;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar("PENDENTE");
        };
        Cadastro.prototype.continuar = function () {
            this.estado = Estado.INICIADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar("INICIADO");
        };
        Cadastro.prototype.cancelar = function () {
            this.estado = Estado.CANCELADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar("CANCELADO");
        };
        Cadastro.prototype.proximo = function () {
            this.estado = Estado.INICIADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar("INICIADO");
        };
        return Cadastro;
    }());
    logica.Cadastro = Cadastro;
})(logica = exports.logica || (exports.logica = {}));
