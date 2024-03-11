import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class BaseComponent extends HTMLElement {
    constructor() {
        super();

        // Automatically fetch the shadow root
        this.setAttribute('class', 'row justify-content-evenly');

        // Set up a default state
        this._state = {}
        // this._state = (value) => ({
        //     recovered: {
        //         value: value.TotalRecovered || 0,
        //         style: "text-success",
        //     },
        //     confirmed: {
        //         value: value.TotalConfirmed || 0,
        //         style: "text-warning",
        //     },
        //     deaths: {
        //         value: value.TotalDeaths || 0,
        //         style: "text-danger",
        //     },
        // });
        this._path = ['global', 'country'];

        // If an onclick function is defined, bind it to this
        if (this.onclick) {
            this.onclick = this.onclick.bind(this);
        }

        // Setup our private _doRender method
        this._doRender = this._doRender.bind(this);

        // Finally, actually render the component for the first time!
        this._doRender();
    }

    setPath(path) {
        if (path === this._path['global']) {
            
        }
    }

    // getState, returns the state for a given path
    getState(path) {
        // The state variable was initialised in the constructor
        return this._state[path];
    }

    // setState, allows for modifying state and automatically rerendering
    setState(path, value) {
        // Only if the state changed, we'd want to rerendering
        // It would be possible to tweak this using a deep comparison for example
        if (this._state[path] !== value) {

            console.info('base value ' + JSON.stringify(value));
            console.info('base state ' + JSON.stringify(this._state));

            const newValue = {
                recovered: {
                    value: value.TotalRecovered || 0,
                    style: "text-success",
                },
                confirmed: {
                    value: value.TotalConfirmed || 0,
                    style: "text-warning",
                },
                deaths: {
                    value: value.TotalDeaths || 0,
                    style: "text-danger",
                },
            };

            this._state[path] = newValue;
            console.info('base state add ' + JSON.stringify(this._state));
            // The state changed, cause a re-render
            this._doRender();
        }
    }

    // The _doRender, our private method for causing a render to occur
    _doRender() {
        // Setup the innerHTML of our component to be the value of the render method
        // The render method will return HTML inside a string
        this.innerHTML = '';
        this.innerHTML = `
            <style>${bootstrap}</style>

            ${this.render()}
        `;

        console.log('bootstrap ' + bootstrap);



        // If an onclick is defined, bind it to the rerender first element component
        if (this.onclick) {
            this.firstElementChild.onclick = this.onclick;
        }
    }
}

export default BaseComponent;