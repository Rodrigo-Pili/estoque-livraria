import { vista } from "./vista";

export namespace logica {
    export enum Estado {
        INICIADO = 1,
        AGUARDANDO,
        PENDENTE,
        BUSCANDO,
        ENCERRADO,
        CANCELADO
    }
    export class Cadastro {
        n: number;
        estado: Estado;
        vista: vista.Vista;
        constructor() {
            this.n = 0;
            this.estado = Estado.INICIADO;
        }

        associarVista(v : vista.Vista) {
            this.vista = v;
        }

        public cadastrar() {
            this.n--;
            this.estado = Estado.ENCERRADO;
            this.vista.habilitarCadastrar (false);
            this.vista.habilitarSuspender (false);
            this.vista.habilitarCancelar (false);
            this.vista.mostrar ("ENCERRADO");
        }
        public suspender() {
            this.estado = Estado.PENDENTE;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar ("PENDENTE");
        }
        public continuar() {
            this.estado = Estado.INICIADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar ("INICIADO");
        }
        public cancelar() {
            this.estado = Estado.CANCELADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar ("CANCELADO");
        }
        public proximo() {
            this.estado = Estado.INICIADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.mostrar ("INICIADO");
        }
    }
}