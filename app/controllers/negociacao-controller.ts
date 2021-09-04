export class NegociacaoController{
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor(){
        //Recuperando os valores dos elementos do dom e  guardando em nossas variaveis
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
}