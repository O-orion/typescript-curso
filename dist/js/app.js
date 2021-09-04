import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 4, 4);
console.log(negociacao.volume);
