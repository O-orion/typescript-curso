import { Negociacoes } from './../models/negociacoe.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoesView } from '../views/negociacoes-views.js';
import { mensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes
    private negociacoesView = new NegociacaoesView('#negociacoesView'); //instanciando e passando o id do elemento dom de onde queremo que nossa tabela seja renderizada
    private mensagemView = new mensagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor(){
        //Recuperando os valores dos elementos do dom e  guardando em nossas variaveis
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes)
        
    }

    public postNegocicao(): void {
        const negociacao = this.criarNegociacao();

        if(!this.ehDiaUlti(negociacao.data)){
            this.mensagemView.update('Apenas dias úteis da semana!');
            return ;
        }
        this.negociacoes.adiciona(negociacao); // adicionando uma negociacao a nossa lista
        this.limparForm();
        this.atualizarView();
    }
    
    private ehDiaUlti(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private criarNegociacao(): Negociacao{
        const rgex = /-/g
        const data = new Date(this.inputData.value.replace(rgex, ',')); //convertendo a strig em uma data, pegando a string e substituindo o - por uma virgula
        const quantidade = parseInt(this.inputQuantidade.value); //tipando para um valor inteiro
        const valor = parseFloat(this.inputValor.value);//tipando para um valor flutuante 
        
        return  new Negociacao(data,quantidade,valor); // criando uma negociação, fazendo a instância da classe
    }
    
    private limparForm(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    
    private atualizarView():void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Adicionado com Sucesso, JESUS CRISTO TE AMA!!")
        
    }
}