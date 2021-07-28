import { LitElement,html,css } from "lit-element";

class HeaderComponent extends LitElement{
    static get styles() {
        return css`
          header{
            background-color: grey;
            border: 1px solid black;

            }
            .header-title{
                padding-top:10px;
                text-align:center;
            }
          
        `;
      };

    render(){
        return html`
            <header>
                <h3 class="header-title">Componente header</h3>
            </header>
        `;
    }
}
customElements.define('header-component',HeaderComponent);