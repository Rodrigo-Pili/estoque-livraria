"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logica;
(function (logica) {
    let Estado;
    (function (Estado) {
        Estado[Estado["INICIADO"] = 1] = "INICIADO";
        Estado[Estado["AGUARDANDO"] = 2] = "AGUARDANDO";
        Estado[Estado["SUSPENSO"] = 3] = "SUSPENSO";
        Estado[Estado["PENDENTE"] = 4] = "PENDENTE";
        Estado[Estado["BUSCANDO"] = 5] = "BUSCANDO";
        Estado[Estado["ENCERRADO"] = 6] = "ENCERRADO";
        Estado[Estado["CANCELADO"] = 7] = "CANCELADO";
    })(Estado = logica.Estado || (logica.Estado = {}));
    class Livro {
        constructor(nomeTitulo) {
            this.titulo = nomeTitulo;
        }
        setTitulo() {
            this.titulo = document.getElementById("text-titulo").value;
        }
    }
    logica.Livro = Livro;
    class ListaLivrosPendentes {
        constructor() {
            this.livrosPendentes = [];
        }
        adicionaLivro() {
            this.livro.setTitulo();
            this.livrosPendentes.push(new Livro(this.livro.titulo));
        }
    }
    logica.ListaLivrosPendentes = ListaLivrosPendentes;
    class Cadastro {
        constructor() {
            this.livrosPendentes = new ListaLivrosPendentes();
            this.n = 0;
            this.estado = Estado.INICIADO;
        }
        associarVista(v) {
            this.vista = v;
        }
        cadastrar() {
            if (this.estado == 1) {
                this.estado = Estado.ENCERRADO;
                this.vista.habilitarContinuar(false);
                this.vista.habilitarCadastrar(false);
                this.vista.habilitarSuspender(false);
                this.vista.habilitarCancelar(false);
                this.vista.mostrar("ENCERRADO");
                console.log(this.n);
            }
        }
        suspender() {
            if (this.n >= 10) {
                this.estado = Estado.AGUARDANDO;
                this.vista.mostrar("AGUARDANDO");
                this.vista.habilitarCadastrar(false);
                this.vista.habilitarSuspender(false);
                this.vista.habilitarCancelar(false);
                this.vista.habilitarProximo(false);
                return;
            }
            this.estado = Estado.SUSPENSO;
            this.vista.habilitarCadastrar(false);
            this.vista.habilitarSuspender(false);
            this.vista.habilitarContinuar(true);
            this.vista.habilitarCancelar(true);
            this.vista.habilitarProximo(false);
            this.vista.mostrar("SUSPENSO");
            console.log(this.n);
        }
        continuar() {
            this.estado = Estado.INICIADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(false);
            this.vista.habilitarCancelar(true);
            this.vista.habilitarProximo(true);
            this.vista.mostrar("INICIADO");
            console.log(this.n);
        }
        cancelar() {
            if (this.estado != 7) {
                this.estado = Estado.CANCELADO;
                this.vista.habilitarCadastrar(false);
                this.vista.habilitarSuspender(false);
                this.vista.habilitarContinuar(false);
                this.vista.habilitarCancelar(false);
                this.vista.habilitarProximo(true);
                this.vista.mostrar("CANCELADO");
                console.log(this.n);
            }
        }
        proximo() {
            if (this.estado == 6) {
                //CADASTRAR
                this.vista.habilitarCadastrar(true);
                this.vista.habilitarSuspender(true);
                this.vista.habilitarContinuar(false);
                this.vista.habilitarCancelar(true);
                this.vista.habilitarProximo(true);
                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");
            }
            else if ((this.estado == 1) && (this.n < 10)) {
                //Próximo
                // adiciona livro na lista
                this.livrosPendentes.adicionaLivro();
                console.log(this.livrosPendentes.livrosPendentes.toString());
                this.n++;
                console.log(this.n);
                alert('Você tem ' + this.n + ' livros pendentes');
                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");
            }
            else if (this.estado == 7) {
                this.vista.habilitarCadastrar(true);
                this.vista.habilitarSuspender(true);
                this.vista.habilitarContinuar(false);
                this.vista.habilitarCancelar(true);
                this.vista.habilitarProximo(true);
                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");
            }
            if (this.n == 10) {
                alert('Você atingiu o número máximo de livros pendentes!');
            }
        }
        pendencia() {
        }
        popupCancelarBtn() {
        }
    }
    logica.Cadastro = Cadastro;
})(logica = exports.logica || (exports.logica = {}));
//# sourceMappingURL=cadastro.js.map