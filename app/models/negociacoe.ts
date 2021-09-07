import { Negociacao } from './negociacao';
export class Negociacoes{
    private negociacoes: Array<Negociacao> = []; //criando uma lista de negociação

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao); //adicionando uma negociação ao meu array
    }

    lista(): ReadonlyArray<Negociacao>{ //retornando um array de negociacao, ReadonlyArray, me retorna uma lista de apenas leitura, não permiti que seja modificado.
        return this.negociacoes;
    }
}
