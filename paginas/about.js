import { LitElement,html } from "lit-element";

class MyAbout extends LitElement{
    render(){
        return html`
        <h3>Este es my about</h3>
        `;
    }
}
customElements.define('my-about',MyAbout);