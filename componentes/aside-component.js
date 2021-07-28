import { LitElement,html,css } from "lit-element";
import '../paginas/paginas' ;
import './main-component';
class AsideComponent extends LitElement{
    static get styles() {
        return css`
     
         main{
            display: flex;
            width: 100%;
            height: 500px;
            }
            aside{
                width: 30%;
                height: 500px;
                background-color:grey;
                border: 1px solid black;
            }
            .nav {
                 margin-top: 50px;
                 list-style-type: none;
                padding-left: 3px;
            }
            .nav a{
                color: white;
                padding: 10px;
                border-radius: 2px;
                text-decoration: none;
            }
            .nav a:hover {
                color: blue;
                cursor:pointer;
            }
            .nav a:active {
                color: red;
            }
            section{
                width:100%;
                height: 500px;
           }
           main-component{
               margin-top:0;
           }
           li {padding-bottom: 4px;}
           
        `;
      };
static get properties(){
    return{
        ban:{type: String}
    }
}
constructor(){
    super();
    this.ban='false';
}
    render(){
        return html`
        <main>
            <aside>
                <h3>Componente Menu</h3>
                <nav>
                <ul class="nav">
                    <li><a @click="${this._clickHome}">Home</a></li>
                    <li><a @click="${this._clickContact}">Conctact</a></li>
                    <li><a @click="${this._clickAbout}">About</a></li>
                </ul>
                </nav>
            </aside>
            <section id="myDiv">
                
                <main-component></main-component>
            </section>
        </main>
        
        `;
       
    }
    _clickHome(){
      const miHome=this.shadowRoot.getElementById('myDiv');
      miHome.innerHTML="<main-component ban='home'></main-component>";
    }
    _clickContact(){
        const micontact=this.shadowRoot.getElementById('myDiv');
        micontact.innerHTML="<main-component ban='contact'></main-component>";
    }
    _clickAbout(){
        const miabout=this.shadowRoot.getElementById('myDiv');
        miabout.innerHTML="<main-component ban='about'></main-component>";
    }
}
customElements.define('aside-component',AsideComponent);