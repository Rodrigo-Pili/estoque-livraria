import { logica } from "./cadastro";
import { timingSafeEqual } from "crypto";

export namespace vista {
    export class Vista {
        cadastro: logica.Cadastro;
        cadastrarBtn: HTMLButtonElement;
        suspenderBtn: HTMLButtonElement;
        continuarBtn: HTMLButtonElement;
        cancelarBtn: HTMLButtonElement;
        proximoBtn: HTMLButtonElement;
        pendenciaBtn: HTMLButtonElement;
        autorizarBtn: HTMLButtonElement;
        popupCancelarBtn: HTMLButtonElement;
        acrescentarBtn: HTMLButtonElement;
        buscarBtn: HTMLButtonElement;
        buscarAutorBtn: HTMLButtonElement;
        cadastrarAutorBtn: HTMLButtonElement;
        voltarPrincipalBtn:  HTMLButtonElement;

        definirBotao(
            ref: string,
            b: HTMLButtonElement,
            f: () => any,
        ): HTMLButtonElement {
            if(ref === "pendencias"){
                b = document.getElementById(ref) as HTMLButtonElement;
                b.addEventListener("click", function() {
                    var popup = document.querySelector('.popup');
                    var overlay = document.querySelector('.popup-overlay');
                    popup.classList.add('is--active');
                    overlay.classList.add('is--active');
                });
                b.disabled = true;
                return b;
            }
            if(ref === "js--close"){
                b = document.getElementById(ref) as HTMLButtonElement;
                b.addEventListener("click", function() {
                    var popup = document.querySelector('.popup');
                    var overlay = document.querySelector('.popup-overlay');
                    popup.classList.remove('is--active');
                    overlay.classList.remove('is--active');
                });
                b.disabled = true;
                return b;
            }
            b = document.getElementById(ref) as HTMLButtonElement;
            b.addEventListener("click", f);
            b.disabled = true;
            return b;
        }

        constructor (c: logica.Cadastro) {
            this.cadastro = c;

            this.cadastrarBtn = this.definirBotao("cadastrar",this.cadastrarBtn, this.cadastrar);
            this.habilitarCadastrar(false);

            this.suspenderBtn = this.definirBotao("suspender",this.suspenderBtn, this.suspender);
            this.habilitarSuspender(false);

            this.continuarBtn = this.definirBotao("continuar",this.continuarBtn, this.continuar);
            this.habilitarContinuar(false);

            this.cancelarBtn = this.definirBotao("cancelar",this.cancelarBtn, this.cancelar);
            this.habilitarCancelar(false);

            this.proximoBtn = this.definirBotao("proximo",this.proximoBtn, this.proximo);
            this.habilitarProximo(false);

            this.pendenciaBtn = this.definirBotao("pendencias",this.pendenciaBtn, this.pendencia);
            this.habilitarPendencia(false);

            this.buscarBtn = this.definirBotao("buscar",this.buscarBtn, this.buscar);
            this.habilitarBuscar(false);

            this.popupCancelarBtn = this.definirBotao("js--close",this.popupCancelarBtn, this.popupCancelarBtn1);
            this.habilitarpopupCancelarBtn(true);

            this.acrescentarBtn = this.definirBotao("acrescentar",this.acrescentarBtn, this.acrescentar);
            this.habilitarAcrescentar(false);

            this.autorizarBtn = this.definirBotao("autorizar",this.autorizarBtn, this.autorizar);
            this.habilitarAutorizar(true);

            this.buscarAutorBtn = this.definirBotao("buscarAutor",this.buscarAutorBtn, this.buscarAutor);
            this.habilitarBuscarAutor(false);

            this.cadastrarAutorBtn = this.definirBotao("cadastrarAutor",this.cadastrarAutorBtn, this.cadastrarAutor);
            this.habilitarCadastrarAutor(false);

            this.voltarPrincipalBtn = this.definirBotao("voltar-principal",this.voltarPrincipalBtn, this.voltarPrincipal);
            this.habilitarVoltarPrincipal(false);
        }

        cadastrar = () => {
            this.cadastro.cadastrar();
        }

        voltarPrincipal = () => {
            this.cadastro.voltarPrincipal();
        }

        buscar = () => {
            this.cadastro.buscar();
        }

        buscarAutor = () => {
            this.cadastro.buscarAutor();
        }

        cadastrarAutor = () => {
            this.cadastro.cadastrarAutor();
        }

        suspender = () => {
            this.cadastro.suspender();
        }

        continuar = () => {
            this.cadastro.continuar();
        }

        cancelar = () => {
            this.cadastro.cancelar();
        }

        proximo = () => {
            this.cadastro.proximo();
        }

        pendencia = () => {
            this.cadastro.pendencia();
        }

        autorizar = () => {
            this.cadastro.autorizar();
        }
        
        acrescentar = () => {
            this.cadastro.acrescentar();
        }

        popupCancelarBtn1 = () => {
            this.cadastro.popupCancelarBtn();
        }

        habilitarCadastrar(sim:boolean) {
            this.cadastrarBtn.disabled = !sim;
        }

        habilitarCadastrarAutor(sim:boolean) {
            this.cadastrarAutorBtn.disabled = !sim;
        }

        habilitarBuscarAutor(sim:boolean) {
            this.buscarAutorBtn.disabled = !sim;
        }

        habilitarBuscar(sim:boolean) {
            this.buscarBtn.disabled = !sim;
        }

        habilitarVoltarPrincipal(sim:boolean) {
            this.voltarPrincipalBtn.disabled = !sim;
        }

        habilitarAcrescentar(sim:boolean) {
            this.acrescentarBtn.disabled = !sim;
        }

        habilitarSuspender(sim:boolean) {
            this.suspenderBtn.disabled = !sim;
        }

        habilitarContinuar(sim:boolean) {
            this.continuarBtn.disabled = !sim;
        }

        habilitarCancelar(sim:boolean) {
            this.cancelarBtn.disabled = !sim;
        }

        habilitarProximo(sim:boolean) {
            this.proximoBtn.disabled = !sim;
        }

        habilitarPendencia(sim:boolean) {
            this.pendenciaBtn.disabled = !sim;
        }

        habilitarAutorizar(sim:boolean) {
            this.autorizarBtn.disabled = !sim;
        }

        habilitarpopupCancelarBtn(sim:boolean) {
            this.popupCancelarBtn.disabled = !sim;
        }

        mostrar (msg : string) {
            let estadoRot = <HTMLButtonElement>document.getElementById('estado');
            estadoRot.innerHTML = msg;
        }
    }
}
