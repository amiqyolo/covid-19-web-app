class CovidContent extends HTMLElement {
    
  set corona(corona) {
      this._corona = corona;
      this.render();
    }

    render() {        
      

      this.innerHTML = '';
      console.log(`covid content = ${JSON.parse(this._corona)}`);


      for (const key in JSON.parse(this._corona)) {        
        console.log("key " + key + " has value " + this._corona[key]);
        this.innerHTML = `<div class="col-md-3 col-12">
            <div class="card mb-5" style="height: 166px;">
                <div class="card-body">
                    <div class="col">
                        <p class="fs-5 text-capitalize fw-bolder">${key}</p>
                        <h5 class="fw-normal display-6 text-success">
                          ${JSON.parse(this._corona[key])}
                        </h5>
                    </div>
                </div>
            </div>
        </div>`;
      }    
    }

      // this.innerHTML = `
      //     <div class="col-md-3 col-12">
      //         <div class="card mb-5" style="height: 166px;">
      //             <div class="card-body">
      //                 <div class="col">
      //                     <p class="fs-5 text-capitalize fw-bolder">Recovered</p>
      //                     <h5 class="fw-normal display-6 text-success">
      //                       ${this._coronas.TotalRecovered}
      //                     </h5>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      //     <div class="col-md-3 col-12">
      //         <div class="card mb-5" style="height: 166px;">
      //             <div class="card-body">
      //                 <div class="col">
      //                     <p class="fs-5 text-capitalize fw-bolder">Confirmed</p>
      //                     <h5 class="fw-normal display-6 text-warning">
      //                       ${this._coronas.TotalConfirmed}
      //                     </h5>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      //     <div class="col-md-3 col-12">
      //         <div class="card mb-5" style="height: 166px;">
      //             <div class="card-body">
      //                 <div class="col">
      //                     <p class="fs-5 text-capitalize fw-bolder">Deaths</p>
      //                     <h5 class="fw-normal display-6 text-danger">
      //                       ${this._coronas.TotalDeaths}
      //                     </h5>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      // `;
    
}

customElements.define('covid-content', CovidContent);