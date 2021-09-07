import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        //Recuperando os valores dos elementos do dom e  guardando em nossas variaveis
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    postNegocicao() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
        this.limparForm();
    }
    criarNegociacao() {
        const rgex = /-/g;
        const data = new Date(this.inputData.value.replace(rgex, ',')); //convertendo a strig em uma data, pegando a string e substituindo o - por uma virgula
        const quantidade = parseInt(this.inputQuantidade.value); //tipando para um valor inteiro
        const valor = parseFloat(this.inputValor.value); //tipando para um valor flutuante 
        return new Negociacao(data, quantidade, valor); // criando uma negociação, fazendo a instância da classe
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
