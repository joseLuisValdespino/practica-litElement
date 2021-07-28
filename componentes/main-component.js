import { LitElement,html,css } from "lit-element";
class MainComponent extends LitElement{
    static get styles() {
        return css`
            main{
                width: 100%;
                height: 500px;
                background-color:white;
                border: 1px solid black;
                text-align:center;
            }
        `;
      };
      static get properties(){
          return {
              ban:{type:String},
              b:{type:Boolean}
          };
      }
      constructor(){
          super();
          this.ban='home';
          this.b=false;
      }
    render(){
        
        return html`
            <main>
                <h3>Componente pagina</h3>
                ${this.ban==='home' ?  html`<my-home></my-home>`
                :
                this.ban==='about' ?
                 html`<my-about></my-about>`
                 :
                 html `<my-contact></my-contact>`
                }
                
            </main>
           

        `;
    }
    properti() {
       if(this.ban === 'home'){
          this.b=true;

       }else{
        this.b=false;
       }
      }
}
customElements.define('main-component',MainComponent);