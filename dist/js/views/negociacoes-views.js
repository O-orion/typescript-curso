export class NegociacaoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); //Atribuindo á nossa variável um elemento do HTML
    }
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
    /*
     Explicação
     no tbody, estamos usando uma template string, para recuperar todas as negociações já salvas, em seguinda usamos um map para interagirmos com cada negociação
     em seguida montamos  as linhas da nossa tabela, o join e para não retorna nenhuma virgula, assim transformando em um array.

     Intl -> Internacionalization, criando uma instancia de uma formatação de data com o local onde o usuário se encontra
    */
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template; //inner vai transforma minha string em um elemento do DOM
    }
}
