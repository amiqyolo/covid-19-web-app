class SelectComponent extends HTMLElement {

    connectedCallback() {
        this.setAttribute('class', 'col-6 mt-4 container');
        this.render();
      }
    
      set keyDownEvent(event) {
        this._keyDownEvent = event;
        this.render();
      }
    
    
      get value() {
        console.log(this.querySelector('#search-element').value);
        return this.querySelector('#search-element').value;
      }
    
      render() {
        this.innerHTML = `        
            <select class="col-6 form-select" aria-label="Default select example">
                <option selected>Select Country</option>
                <option value="1">Indonesia</option>
            </select>
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

customElements.define('select-component', SelectComponent);