export class mensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); //caputando a div no formulário
    }
    template(model) {
        return `
          <p class="alert alert-info">${model}</p>
        `;
    } // criando o paragráfo que irá mostra a mensagem
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template; //Inner vai transforma nossa string em um elemento HTML é injetar dentro do DOM, no caso dntro da nossa div
    }
}
