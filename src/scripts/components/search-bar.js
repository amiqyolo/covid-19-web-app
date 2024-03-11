import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends HTMLElement {

    connectedCallback() {
      this.setAttribute('class', 'form-outline col-8 mt-4 container');
      this.render();
    }
  
    set keyDownEvent(event) {
      this._keyDownEvent = event;
      this.render();
    }
  
  
    get value() {
      console.log('boot' + JSON.stringify(bootstrap));

      console.log(this.querySelector('#search-element').value);
      return this.querySelector('#search-element').value;
    }
  
    render() {
      this.innerHTML = `       
        ${bootstrap}
        <input type="search" class="form-control" id="search-element" placeholder="Search Country's">
      `;

      const myInput = this.querySelector('#search-element');

      myInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            this._keyDownEvent;
            console.log(myInput.value);
        }
      });
  
      // this.querySelector('#search-element').addEventListener('change', () => {
      //   this._keyDownEvent;
      //   console.log(`keydown ${this.querySelector('#search-element').value}`);
      // });
    }
  }
  
  customElements.define('search-bar', SearchBar);
  