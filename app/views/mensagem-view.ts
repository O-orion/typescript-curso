export class mensagemView {
    private elemento: HTMLElement; // declarando a variável do tipo HTMLElement

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor); //caputando a div no formulário
    }

    template(model: string):string{
        return `
          <p class="alert alert-info">${model}</p>
        `
    } // criando o paragráfo que irá mostra a mensagem

    update(model:string):void{
        const template = this.template(model);
        this.elemento.innerHTML = template; //Inner vai transforma nossa string em um elemento HTML é injetar dentro do DOM, no caso dntro da nossa div
    }
}