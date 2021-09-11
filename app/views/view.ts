export abstract class View<T>{
    //private elemento: HTMLElement; com private os elementos filhos não tem acesso a ele
    protected elemento: HTMLElement; //com protected os elementos filhos possuem acesso á ele

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor); //caputando a div no formulário
    } // passamos o construtor para cá

    update(model: T):void{
        const template = this.template(model);
        this.elemento.innerHTML = template; //Inner vai transforma nossa string em um elemento HTML é injetar dentro do DOM, no caso dntro da nossa div
    }

    abstract template(model: T): string //método abstrato, obriga o desenvolvedor implementar essa classe em tempo de desenvolvimento.
}