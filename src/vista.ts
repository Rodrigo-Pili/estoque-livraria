import { logica } from "./cadastro";

export namespace vista {
    export class Vista {
        cadastro: logica.Cadastro;
        cadastrarBtn: HTMLButtonElement;
        suspenderBtn: HTMLButtonElement;
        continuarBtn: HTMLButtonElement;
        cancelarBtn: HTMLButtonElement;
        proximoBtn: HTMLButtonElement;

        definirBotao(
            ref: string,
            b: HTMLButtonElement,
            f: () => any,
        ): HTMLButtonElement {
            b = document.getElementById(ref) as HTMLButtonElement;
            b.addEventListener("click", f);
            b.disabled = true;
            return b;
        }

        constructor (c: logica.Cadastro) {
            this.cadastro = c;

            this.cadastrarBtn = this.definirBotao("cadastrar",this.cadastrarBtn, this.cadastrar);
            this.habilitarCadastrar(true);

            this.suspenderBtn = this.definirBotao("suspender",this.suspenderBtn, this.suspender);
            this.habilitarSuspender(true);

            this.continuarBtn = this.definirBotao("continuar",this.continuarBtn, this.continuar);
            this.habilitarContinuar(false);

            this.cancelarBtn = this.definirBotao("cancelar",this.cancelarBtn, this.cancelar);
            this.habilitarCancelar(true);

            this.proximoBtn = this.definirBotao("proximo",this.proximoBtn, this.proximo);
            this.habilitarProximo(true);
        }

        cadastrar = () => {
            this.cadastro.cadastrar();
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

        habilitarCadastrar(sim:boolean) {
            this.cadastrarBtn.disabled = !sim;
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

        mostrar (msg : string) {
            let estadoRot = <HTMLButtonElement>document.getElementById('estado');
            estadoRot.innerHTML = msg;
        }
    }
}
