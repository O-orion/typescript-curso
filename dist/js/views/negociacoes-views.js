import { View } from "./view.js";
export class NegociacaoesView extends View {
    /*private elemento: HTMLElement; //Criando uma variável do tipo HTMLElement
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor); //Atribuindo á nossa variável um elemento do HTML
    } */
    template(model) {
        return `
           <table class="table table-hover table-bordered">
              <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
              </thead>
              <tbody>
                ${model.lista().map(negociacao => {
            return `
                      <tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>$: ${negociacao.valor}</td>
                      </tr>
                    `;
        }).join('')} 
              </tbody>
           </table>
        `; //template string, vamos retorna um html
    }
}
