import { Negociacoes } from './../models/negociacoe.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoesView } from '../views/negociacoes-views.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacaoesView('#negociacoesView'); //instanciando e passando o id do elemento dom de onde queremo que nossa tabela seja renderizada
        //Recuperando os valores dos elementos do dom e  guardando em nossas variaveis
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    postNegocicao() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adiciona(negociacao); // adicionando uma negociacao a nossa lista
        console.log(this.negociacoes.lista());
        this.negociacoesView.update(this.negociacoes);
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
