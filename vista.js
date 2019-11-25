"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vista;
(function (vista) {
    class Vista {
        constructor(c) {
            this.cadastrar = () => {
                this.cadastro.cadastrar();
            };
            this.suspender = () => {
                this.cadastro.suspender();
            };
            this.continuar = () => {
                this.cadastro.continuar();
            };
            this.cancelar = () => {
                this.cadastro.cancelar();
            };
            this.proximo = () => {
                this.cadastro.proximo();
            };
            this.pendencia = () => {
                this.cadastro.pendencia();
            };
            this.popupCancelarBtn1 = () => {
                this.cadastro.popupCancelarBtn();
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
            this.pendenciaBtn = this.definirBotao("pendencias", this.pendenciaBtn, this.pendencia);
            this.habilitarPendencia(true);
            this.popupCancelarBtn = this.definirBotao("js--close", this.popupCancelarBtn, this.popupCancelarBtn1);
            this.habilitarpopupCancelarBtn(true);
        }
        definirBotao(ref, b, f) {
            if (ref === "pendencias") {
                b = document.getElementById(ref);
                b.addEventListener("click", function () {
                    var popup = document.querySelector('.popup');
                    var overlay = document.querySelector('.popup-overlay');
                    popup.classList.add('is--active');
                    overlay.classList.add('is--active');
                });
                b.disabled = true;
                return b;
            }
            if (ref === "js--close") {
                b = document.getElementById(ref);
                b.addEventListener("click", function () {
                    var popup = document.querySelector('.popup');
                    var overlay = document.querySelector('.popup-overlay');
                    popup.classList.remove('is--active');
                    overlay.classList.remove('is--active');
                });
                b.disabled = true;
                return b;
            }
            b = document.getElementById(ref);
            b.addEventListener("click", f);
            b.disabled = true;
            return b;
        }
        habilitarCadastrar(sim) {
            this.cadastrarBtn.disabled = !sim;
        }
        habilitarSuspender(sim) {
            this.suspenderBtn.disabled = !sim;
        }
        habilitarContinuar(sim) {
            this.continuarBtn.disabled = !sim;
        }
        habilitarCancelar(sim) {
            this.cancelarBtn.disabled = !sim;
        }
        habilitarProximo(sim) {
            this.proximoBtn.disabled = !sim;
        }
        habilitarPendencia(sim) {
            this.pendenciaBtn.disabled = !sim;
        }
        habilitarpopupCancelarBtn(sim) {
            this.popupCancelarBtn.disabled = !sim;
        }
        mostrar(msg) {
            let estadoRot = document.getElementById('estado');
            estadoRot.innerHTML = msg;
        }
    }
    vista.Vista = Vista;
})(vista = exports.vista || (exports.vista = {}));
//# sourceMappingURL=vista.js.map