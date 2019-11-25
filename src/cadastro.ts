import { vista } from "./vista";

export namespace logica {
    export enum Estado {
        INICIADO = 1,
        AGUARDANDO = 2,
        SUSPENSO = 3,
        PENDENTE = 4,
        BUSCANDO = 5,
        ENCERRADO = 6,
        CANCELADO = 7
    }

    export class Funcionario {
        numFunc: String = "123";
        senha: String = "123";
    }

    export class Livro {
        titulo: String;
        isbn: Number;

        public setTitulo(){
            this.titulo = (<HTMLInputElement>document.getElementById("text-titulo")).value;
        }

        public setIsbn(){
            this.isbn = Number ((<HTMLInputElement>document.getElementById("text-isbn")).value);
        }
    }

    export class ListaLivrosPendentes{
        livrosPendentes: Array<Livro> = [];
        livro: Livro;

        public adicionaLivro(){
            this.livro = new Livro();
            this.livro.setTitulo();
            this.livro.setIsbn();

            this.livrosPendentes.push(this.livro);
        }
    }

    export class Cadastro {
        n: number;
        estado: Estado;
        vista: vista.Vista;
        livrosPendentes: ListaLivrosPendentes = new ListaLivrosPendentes();
        inputTitulo: HTMLInputElement = <HTMLInputElement>document.getElementById("text-titulo");
        isbn: HTMLInputElement = <HTMLInputElement>document.getElementById("text-isbn");
        inputNumFunc: HTMLInputElement = (<HTMLInputElement>document.getElementById("login"));
        inputSenhaFunc: HTMLInputElement = (<HTMLInputElement>document.getElementById("senha"));
        textNumFunc: String;
        textSenhaFunc: String;
        funcionario: Funcionario = new Funcionario();
        elementoNumeroFuncionario: HTMLInputElement;

        constructor() {
            this.n = 0;
            this.estado = Estado.INICIADO;
        }

        associarVista(v: vista.Vista) {
            this.vista = v;
        }

        public autorizar(){
            this.textNumFunc =  this.inputNumFunc.value;
            this.textSenhaFunc =  this.inputSenhaFunc.value;
            
            if(this.textNumFunc === this.funcionario.numFunc && this.textSenhaFunc === this.funcionario.senha){
                
                this.elementoNumeroFuncionario = <HTMLInputElement>document.getElementById("numero-funcionario");
                
                this.elementoNumeroFuncionario.value = String (this.funcionario.numFunc);

                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");

                this.vista.habilitarAutorizar(false);
                this.vista.habilitarAcrescentar(true);
                this.vista.habilitarBuscar(true);
                this.vista.habilitarCadastrar(true);
                this.vista.habilitarSuspender(true);
                this.vista.habilitarCancelar(true);
                this.vista.habilitarProximo(true);
                this.vista.habilitarPendencia(true);
            }
            
            this.inputNumFunc.value = "";
            this.inputSenhaFunc.value = "";
        }
        
        public cadastrar() {
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
        public suspender() {
            if (this.n >= 10) {
                this.estado = Estado.AGUARDANDO;
                this.vista.mostrar("AGUARDANDO");
                this.vista.habilitarCadastrar(false);
                this.vista.habilitarSuspender(false);
                this.vista.habilitarCancelar(false);
                this.vista.habilitarProximo(false);
                return
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
        public continuar() {
            this.estado = Estado.INICIADO;
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarContinuar(false);
            this.vista.habilitarCancelar(true);
            this.vista.habilitarProximo(true);
            this.vista.mostrar("INICIADO");
            console.log(this.n);
        }
        public cancelar() {
            if(this.estado != 7){
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
        public proximo() {
            if (this.estado == 6) {
                //CADASTRAR
                this.vista.habilitarCadastrar(true);
                this.vista.habilitarSuspender(true);
                this.vista.habilitarContinuar(false);
                this.vista.habilitarCancelar(true);
                this.vista.habilitarProximo(true);
                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");
            } else if ((this.estado == 1) && (this.n < 10)) {
                //Próximo
                // adiciona livro na lista

                this.livrosPendentes.adicionaLivro();

                this.livrosPendentes.livrosPendentes.forEach(livro => {
                    console.log(livro);
                });
                
                this.n++;
                console.log(this.n);
                alert('Você tem ' + this.n + ' livros pendentes');
                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");

                this.inputTitulo.value = "";
                this.isbn.value = "";
            } else if (this.estado == 7){
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
        
        public buscar() {
            this.vista.habilitarAcrescentar(false);
            this.vista.habilitarBuscar(false);
            this.vista.habilitarCadastrar(false);
            this.vista.habilitarSuspender(false);
            this.vista.habilitarCancelar(false);
            this.vista.habilitarProximo(false);
            this.vista.habilitarPendencia(false);
            this.vista.habilitarBuscarAutor(true);
            this.vista.habilitarCadastrarAutor(true);
        }

        public pendencia() {
            
        }

        public acrescentar() {
            
        }

        public popupCancelarBtn() {
            
        }


        public buscarAutor() {
            
        }

        public cadastrarAutor() {
            
        }
    }
}