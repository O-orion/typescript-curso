export class Negociacao {
    /*private _data: Date;
    private _quantidade: number;
    private _valor: number; método antigo da crianção da classe*/

    constructor(
                private _data: Date,
                private _quantidade: number, 
                private _valor: number
                ) {// declarando e já recebendo os valores dos atributos, o TypeScript faz por de baixo do panos cria os atributos e faz a atribuição dos valores
        /*this._data = data;
        this._quantidade = quantidade;
        this._valor = valor; método antigo*/
    }

    get data():Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade():number {
        return this._quantidade;
    }

    get valor():number {
        return this._valor;
    }

    get volume():number {
        return this._quantidade * this._valor;
    }
}