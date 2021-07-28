import { LitElement,html } from "lit-element";

class MyHome extends LitElement{
    render(){
        return html`
        <h3>Este es my home</h3>
        `;
    }
}
customElements.define('my-home',MyHome);