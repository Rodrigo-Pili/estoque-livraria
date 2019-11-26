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

    export class Estoque {
        estoque: Array<Livro> = [];
        qtdLivros: Number;

        public adicionar(livro: Livro) {
            this.qtdLivros = Number((<HTMLInputElement>document.getElementById("total-livros")).value);

            for (let i = 0; i < this.qtdLivros; i++) {
                this.estoque.push(livro);
            }
        }
    }

    export class ListaAutoresLivro {
        listaAutoresLivro: Array<Autor>;

        constructor() {
            this.listaAutoresLivro = new Array<Autor>();
        }

        get getListaAutoresLivro(): Array<Autor> {
            return this.listaAutoresLivro;
        }

        public adicionarNaListaDeAutores(autor: Autor): void {
            this.listaAutoresLivro.push(autor);
        }
    }

    export class Livro {
        titulo: String;
        isbn: Number;
        numeroFuncionario: String;
        listaAutoresLivro: Array<Autor>;

        public setTitulo() {
            this.titulo = (<HTMLInputElement>document.getElementById("text-titulo")).value;
        }

        public setIsbn() {
            this.isbn = Number((<HTMLInputElement>document.getElementById("text-isbn")).value);
        }

        public setNumeroFuncionario() {
            this.numeroFuncionario = (<HTMLInputElement>document.getElementById("numero-funcionario")).value;
        }

        public setListaAutoresLivro(aux: ListaAutoresLivro) {
            this.listaAutoresLivro = aux.getListaAutoresLivro;
        }
    }

    export class ListaLivrosPendentes {
        livrosPendentes: Array<Livro> = [];
        livro: Livro;

        public adicionaLivro() {
            this.livro = new Livro();
            this.livro.setTitulo();
            this.livro.setIsbn();

            this.livrosPendentes.push(this.livro);
        }
    }

    export class Autor {
        cpf: String;
        nome: String;

        public setCpf() {
            this.cpf = (<HTMLInputElement>document.getElementById("cpf")).value;
        }

        public setNome() {
            this.nome = (<HTMLInputElement>document.getElementById("nome")).value;
        }
    }

    export class ListaAutor {

        listaAutor: Array<Autor> = new Array<Autor>();
        autor: Autor;

        public adicionarAutor() {
            this.autor = new Autor();
            this.autor.setCpf();
            this.autor.setNome();

            this.listaAutor.push(this.autor);
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
        inputCpfAutor: HTMLInputElement = (<HTMLInputElement>document.getElementById("cpf"));
        inputNomeAutor: HTMLInputElement = (<HTMLInputElement>document.getElementById("nome"));
        textNumFunc: String;
        textSenhaFunc: String;
        funcionario: Funcionario = new Funcionario();
        elementoNumeroFuncionario: HTMLInputElement;
        listaAutor: ListaAutor = new ListaAutor();
        nomeAutor: HTMLInputElement = (<HTMLInputElement>document.getElementById("inputNomeAutor"));
        estoque: Estoque = new Estoque();
        livro: Livro;
        listaAutoresLivroClasse: ListaAutoresLivro;
        totalLivros: HTMLInputElement = (<HTMLInputElement>document.getElementById("total-livros"));

        constructor() {
            this.n = 0;
            this.estado = Estado.INICIADO;
        }

        associarVista(v: vista.Vista) {
            this.vista = v;
        }

        public autorizar() {
            this.textNumFunc = this.inputNumFunc.value;
            this.textSenhaFunc = this.inputSenhaFunc.value;

            if (this.textNumFunc === this.funcionario.numFunc && this.textSenhaFunc === this.funcionario.senha) {

                this.elementoNumeroFuncionario = <HTMLInputElement>document.getElementById("numero-funcionario");

                this.elementoNumeroFuncionario.value = String(this.funcionario.numFunc);

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

                this.livro = new Livro();
                this.livro.setIsbn();
                this.livro.setNumeroFuncionario();
                this.livro.setTitulo();
                this.livro.setListaAutoresLivro(this.listaAutoresLivroClasse);

                this.estoque.adicionar(this.livro);

                this.estado = Estado.ENCERRADO;
                this.vista.habilitarContinuar(false);
                this.vista.habilitarCadastrar(false);
                this.vista.habilitarSuspender(false);
                this.vista.habilitarCancelar(false);
                this.vista.mostrar("ENCERRADO");

                console.log(this.estoque);

                this.isbn.value = "";
                this.inputTitulo.value = "";
                this.nomeAutor.value = "";
                this.totalLivros.value = "1";
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

                this.n++;
                alert('Você tem ' + this.n + ' livros pendentes');
                this.estado = Estado.INICIADO;
                this.vista.mostrar("INICIADO");

                this.inputTitulo.value = "";
                this.isbn.value = "";
            } else if (this.estado == 7) {
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
            this.vista.habilitarVoltarPrincipal(true);
        }

        public pendencia() {

        }

        public acrescentar() {
            this.listaAutoresLivroClasse = new ListaAutoresLivro();

                this.listaAutor.listaAutor.forEach(autor => {
                    if (autor.nome === this.nomeAutor.value) {
                        this.listaAutoresLivroClasse.adicionarNaListaDeAutores(autor);
                        alert(autor.nome + " adicionado como autor do livro com sucesso!");
                    } else {
                        alert("Autor não encontrado!");
                    }
                });
        }

        public popupCancelarBtn() {

        }

        public buscarAutor() {

        }

        public cadastrarAutor() {
            this.listaAutor.adicionarAutor();

            this.listaAutor.listaAutor.forEach(autor => {
                console.log(autor);
            });

            console.log(this.listaAutor.listaAutor.length);

            this.inputCpfAutor.value = "321";
            this.inputNomeAutor.value = "Rodrigo";
        }

        public voltarPrincipal() {
            this.vista.habilitarAutorizar(false);
            this.vista.habilitarAcrescentar(true);
            this.vista.habilitarBuscar(true);
            this.vista.habilitarCadastrar(true);
            this.vista.habilitarSuspender(true);
            this.vista.habilitarCancelar(true);
            this.vista.habilitarProximo(true);
            this.vista.habilitarPendencia(true);
            this.vista.habilitarBuscarAutor(false);
            this.vista.habilitarCadastrarAutor(false);
            this.vista.habilitarVoltarPrincipal(false);
        }
    }
}