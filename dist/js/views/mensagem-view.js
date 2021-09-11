import { View } from "./view.js";
export class mensagemView extends View {
    // private elemento: HTMLElement; // declarando a variável do tipo HTMLElement
    /*constructor(seletor: string){
        this.elemento = document.querySelector(seletor); //caputando a div no formulário
    }*/
    template(model) {
        return `
          <p class="alert alert-info">${model}</p>
        `;
    } // criando o paragráfo que irá mostra a mensagem
}
