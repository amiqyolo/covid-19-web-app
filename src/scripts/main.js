import ListCard from './components/list-card.js';
import './components/search-bar.js';
import './components/covid-content.js';
import './components/global-report.js';
import './components/country.report.js';
import './components/custom-select.js';

import './components/global-component.js';
import './components/country-component.js';

import ApiServices from './sources/api-services.js';

const main = () => {
    const BASE_URL = "https://api.covid19api.com";

    const searchElement = document.querySelector('search-bar');
    const globalReport = document.querySelector('global-report');
    const countryReport = document.querySelector('country-report');
    const listCard = document.querySelector('list-card');
    const globalComponent = document.querySelector('global-component');
    const countryComponent = document.querySelector('country-component');

    const onButtonSearchClicked = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                  'X-Access-Token': '1e29ed29-066c-4494-ae5d-a6174a8fc551',
                },
            };
    
            const response = await fetch(`https://api.covid19api.com/summary`, options);
            const responseJson = await response.json();
    
            renderResult(responseJson);
          
        } catch (message) {
          fallbackResult(message);
        }
    };

    const renderResult = results => {
        console.log(results);
        // listCard.datas = results;
    };

    const fallbackResult = message => {
        // listCard.renderError(message);
        console.log(message);
    };

    searchElement.keyDownEvent = onButtonSearchClicked;

    const getGlobalSummary = async () => {
        try {
            // const options = {
            //     method: 'GET',
            //     headers: {
            //       'X-Access-Token': '1e29ed29-066c-4494-ae5d-a6174a8fc551',
            //     },
            // };
            const response = await fetch(`${BASE_URL}/summary`);
            const responseJson = await response.json();

            // const card = document.querySelector('list-card');
            // globalComponent.data = responseJson;
            globalComponent.data = responseJson;

            // const listCard = document.querySelector('list-card');
            // const countriesReport = document.getElementById("countries-report");
            // const globalReport = document.getElementById("global-report");
            // if (countriesReport) {
            //     const countries = responseJson.Countries;
            //     countries.forEach(element => {
            //         if (element.Country.toLowerCase().includes("InDoneSia".toLowerCase())) {
            //             console.info(element.Country);
            //             listCard.datas = element;
            //         }
            //         console.info(element.Country);
            //     });
            // } else if(globalReport) {
            //     listCard.datas = responseJson.Global;
            //     console.info(responseJson.Global);
            // }
        } catch (error) {
            console.log(error);
        }
    };

    getGlobalSummary();
};

export default main;