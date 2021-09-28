import { Negociacoes } from './../models/negociacoe.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoesView } from '../views/negociacoes-views.js';
import { mensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacaoesView('#negociacoesView'); //instanciando e passando o id do elemento dom de onde queremo que nossa tabela seja renderizada
        this.mensagemView = new mensagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        //Recuperando os valores dos elementos do dom e  guardando em nossas variaveis
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    postNegocicao() {
        const negociacao = this.criarNegociacao();
        if (!this.ehDiaUlti(negociacao.data)) {
            this.mensagemView.update('Apenas dias úteis da semana!');
            return;
        }
        this.negociacoes.adiciona(negociacao); // adicionando uma negociacao a nossa lista
        this.limparForm();
        this.atualizarView();
    }
    ehDiaUlti(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
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
    atualizarView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Adicionado com Sucesso, JESUS CRISTO TE AMA!!");
    }
}
