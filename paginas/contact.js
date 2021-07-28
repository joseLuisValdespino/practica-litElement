import { LitElement,html } from "lit-element";

class MyContact extends LitElement{
    render(){
        return html`
        <h3>Este es my contact</h3>
        `;
    }
}
customElements.define('my-contact',MyContact);