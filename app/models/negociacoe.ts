import { Negociacao } from './negociacao';
export class Negociacoes{
    private negociacoes: Negociacao[] = []; //criando uma lista de negociação, método antigo Array<Negociacao>

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao); //adicionando uma negociação ao meu array
    }
                //Método antigo ReadonlyArray<Negociacao>
    lista(): readonly Negociacao[]{ //retornando um array de negociacao, ReadonlyArray, me retorna uma lista de apenas leitura, não permiti que seja modificado.
        return this.negociacoes;
    }
}
