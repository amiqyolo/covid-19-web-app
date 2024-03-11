class GlobalReport extends HTMLElement {

    set global(global) {
        this._global = global;
        this.setAttribute('class', 'row justify-content-center');
        this.render();
    }

    connectedCallback() {
        this.id = this.getAttribute('id') + "-report" || null;
        this.className = this.getAttribute('class') || null;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
        }

    }
     
    static get observedAttributes() {
        return ['id', 'class'];
    }

    render() { 
        const globalData = {
            recovered: {
                value: this._global.TotalRecovered || 0,
                style: "text-success",
            },
            confirmed: {
                value: this._global.TotalConfirmed || 0,
                style: "text-warning",
            },
            deaths: {
                value: this._global.TotalDeaths || 0,
                style: "text-danger",
            },
        };

        for (const key in globalData) {        
            console.info("key " + key + " has value " + globalData[key].value);
            this.innerHTML += `
                <div class="col-md-3 col-12">
                    <div class="card mb-5" style="height: 166px;">
                        <div class="card-body">
                            <div class="col">
                                <p class="fs-5 text-capitalize fw-bolder">${key}</p>
                                <h5 class="fw-normal display-6 ${globalData[key].style}">
                                    ${globalData[key].value}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            `;  
        }
    }

    renderError(message) {
        this.innerHTML = `
          <style>
            .placeholder {
              font-weight: lighter;
              color: rgba(0,0,0,0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          </style>
        `;
    
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('global-report', GlobalReport);