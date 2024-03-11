import BaseComponent from './base-component.js';

class GlobalComponent extends BaseComponent {
    constructor() {
        super();
        this._htmlRender = '';
        this._path = '';
    }

    set data(data) {
        const elements = document.querySelectorAll('global-component');
        let elementsArray = [...elements]; // converts NodeList to Array
        
        elementsArray.forEach(element => {
            if (element.id === 'global') {
                console.log('global ' + element.id);
                this._path = element.id;
                this.setState(data.Global);
            }
            if (element.id === 'country') {
                console.log('country ' + element.id);
                this._path = element.id;
                this.setState(element.id, data.Countries);
            }
        });
    }

    // Setup a render method which returns HTML as a string
    render() {
        // Get our click count, and default to 0 if it is not yet clicked
        const objectData = this.getState('global') || {};
        console.log('data' + JSON.stringify(objectData));

        for (const key in objectData) {
            console.log("data dalam" + objectData[key].value);
            this._htmlRender += `
                <div class="col-md-3 col-12">
                    <div class="card mb-5" style="height: 166px;">
                        <div class="card-body">
                            <div class="col">
                                <p class="fs-5 text-capitalize fw-bolder">${key}</p>
                                <h5 class="fw-normal display-6 ${objectData[key].style}">
                                    ${objectData[key].value}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        return this._htmlRender;        
    }
}

customElements.define('global-component', GlobalComponent);