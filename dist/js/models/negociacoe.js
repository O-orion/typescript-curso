export class Negociacoes {
    constructor() {
        this.negociacoes = []; //criando uma lista de negociação, método antigo Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao); //adicionando uma negociação ao meu array
    }
    //Método antigo ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
