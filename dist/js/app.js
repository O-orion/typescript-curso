import { NegociacaoController } from './controllers/negociacao-controller.js'; //preciso colocar .js se não, não irá funcionar
const controller = new NegociacaoController(); //instanciando o meu controller
const form = document.querySelector('.form'); //recuperando form do html
form.addEventListener('submit', event => {
    controller.postNegocicao();
    event.preventDefault(); //--> impede que a página de o reload
});
