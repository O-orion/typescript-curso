export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); //caputando a div no formulário
    } // passamos o construtor para cá
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template; //Inner vai transforma nossa string em um elemento HTML é injetar dentro do DOM, no caso dntro da nossa div
    }
}
