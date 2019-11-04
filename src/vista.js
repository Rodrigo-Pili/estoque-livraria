"use strict";
exports.__esModule = true;
var vista;
(function (vista) {
    var Vista = /** @class */ (function () {
        function Vista(c) {
            var _this = this;
            this.cadastrar = function () {
                _this.cadastro.cadastrar();
            };
            this.suspender = function () {
                _this.cadastro.suspender();
            };
            this.continuar = function () {
                _this.cadastro.continuar();
            };
            this.cancelar = function () {
                _this.cadastro.cancelar();
            };
            this.proximo = function () {
                _this.cadastro.proximo();
            };
            this.cadastro = c;
            this.cadastrarBtn = this.definirBotao("cadastrar", this.cadastrarBtn, this.cadastrar);
            this.habilitarCadastrar(true);
            this.suspenderBtn = this.definirBotao("suspender", this.suspenderBtn, this.suspender);
            this.habilitarSuspender(true);
            this.continuarBtn = this.definirBotao("continuar", this.continuarBtn, this.continuar);
            this.habilitarContinuar(false);
            this.cancelarBtn = this.definirBotao("cancelar", this.cancelarBtn, this.cancelar);
            this.habilitarCancelar(true);
            this.proximoBtn = this.definirBotao("proximo", this.proximoBtn, this.proximo);
            this.habilitarProximo(true);
        }
        Vista.prototype.definirBotao = function (ref, b, f) {
            b = document.getElementById(ref);
            b.addEventListener("click", f);
            b.disabled = true;
            return b;
        };
        Vista.prototype.habilitarCadastrar = function (sim) {
            this.cadastrarBtn.disabled = !sim;
        };
        Vista.prototype.habilitarSuspender = function (sim) {
            this.suspenderBtn.disabled = !sim;
        };
        Vista.prototype.habilitarContinuar = function (sim) {
            this.continuarBtn.disabled = !sim;
        };
        Vista.prototype.habilitarCancelar = function (sim) {
            this.cancelarBtn.disabled = !sim;
        };
        Vista.prototype.habilitarProximo = function (sim) {
            this.proximoBtn.disabled = !sim;
        };
        Vista.prototype.mostrar = function (msg) {
            var estadoRot = document.getElementById('estado');
            estadoRot.innerHTML = msg;
        };
        return Vista;
    }());
    vista.Vista = Vista;
})(vista = exports.vista || (exports.vista = {}));
