class ListCard extends HTMLElement {

    constructor() {
        super();

        this._state = {};
    }

    set datas(datas) {
        this._datas = datas;
        this._state = datas;
        this.setAttribute('class', 'row justify-content-center');
        this.render();
    }

    connectedCallback() {
        this.id = this.getAttribute('id') + "-report" || null;
        this.className = this.getAttribute('class') || null;

        console.log(`data ${JSON.stringify(this._state)}`);
        if (this.hasAttribute('id')) {
            if (this.getAttribute('id').includes("country-report")) {
                console.info(`set data country`);
                if (this._state.Countries !== null) {
                    this._state.Countries.forEach(element => {
                        if (element.Country.toLowerCase() === "india".toLowerCase()) {
                            console.info(`set data country ${this._state.Global}`);
                            this._datas = {
                                recovered: {
                                    value: element.TotalRecovered || 0,
                                    style: "text-success",
                                },
                                confirmed: {
                                    value: element.TotalConfirmed || 0,
                                    style: "text-warning",
                                },
                                deaths: {
                                    value: element.TotalDeaths || 0,
                                    style: "text-danger",
                                },
                            }; 
                        }
                    });
                } else {
                    this._datas = {
                        recovered: {
                            value: this._state.TotalRecovered || 0,
                            style: "text-success",
                        },
                        confirmed: {
                            value: this._state.TotalConfirmed || 0,
                            style: "text-warning",
                        },
                        deaths: {
                            value: this._state.TotalDeaths || 0,
                            style: "text-danger",
                        },
                    };
                }
            } else if (this.getAttribute('id').includes("global-report")) {
                console.info(`set data global`);
                this._datas = {
                    recovered: {
                        value: this._state.Global.TotalRecovered || 0,
                        style: "text-success",
                    },
                    confirmed: {
                        value: this._state.Global.TotalConfirmed || 0,
                        style: "text-warning",
                    },
                    deaths: {
                        value: this._state.Global.TotalDeaths || 0,
                        style: "text-danger",
                    },
                };
            } 
    
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (this[name] === 'global-report') {
                this[name] = newValue;
                console.info(`global ${this[name]}`);
            } else if (this[name] === "country-report") {
                this[name] = newValue;
                console.info(`country ${this[name]}`);
            }
        }
    }
     
    static get observedAttributes() {
        return ['id', 'class'];
    }

    render() { 
        for (const key in this._datas) {        
            console.info("key " + key + " has value " + this._datas[key].value);
            this.innerHTML += `
                <div class="col-md-3 col-12">
                    <div class="card mb-5" style="height: 166px;">
                        <div class="card-body">
                            <div class="col">
                                <p class="fs-5 text-capitalize fw-bolder">${key}</p>
                                <h5 class="fw-normal display-6 ${this._datas[key].style}">
                                    ${this._datas[key].value}
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

customElements.define('list-card', ListCard);