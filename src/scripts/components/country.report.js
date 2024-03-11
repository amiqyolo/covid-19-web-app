class CountryReport extends HTMLElement {

    set country(country) {
        this._country = country;
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
        const countryData = {
            recovered: {
                value: this._country.TotalRecovered || 0,
                style: "text-success",
            },
            confirmed: {
                value: this._country.TotalConfirmed || 0,
                style: "text-warning",
            },
            deaths: {
                value: this._country.TotalDeaths || 0,
                style: "text-danger",
            },
        };

        for (const key in countryData) {        
            console.info("key " + key + " has value " + countryData[key].value);
            this.innerHTML += `
                <div class="col-md-3 col-12">
                    <div class="card mb-5" style="height: 166px;">
                        <div class="card-body">
                            <div class="col">
                                <p class="fs-5 text-capitalize fw-bolder">${key}</p>
                                <h5 class="fw-normal display-6 ${countryData[key].style}">
                                    ${countryData[key].value}
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

customElements.define('country-report', CountryReport);