const site = window.location.hostname;

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

const codeBar = window.location.href.slice(-10);
const isAllDigits = /^\d{10}$/.test(codeBar);
if ((site == "www.homedepot.ca") && isAllDigits) {
  Add_Custom_Style(`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap');

  * {
    color: #Ff8c00 !important;
  }
    
  .BarCodeElement {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999999;
    background-color: #ffffff;
    font-family: 'Libre Barcode 39', cursive !important;
    font-size: 4em;
    color: #000000 !important;
    margin-bottom: -.5em;
    width: 100%;
  }
  .BCDescription {
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    text-align: center;
    z-index: 999999;
    background-color: #ffffff;
    font-family: 'Arial', cursive !important;
    font-size: 1em;
    color: #000000 !important;
  }
  `);
  const BarCode = document.createElement("div");
  BarCode.setAttribute("class", "BarCodeElement");
  BarCode.innerHTML = "*" + codeBar + "*";
  document.body.appendChild(BarCode);

  const BarCodeDescription = document.createElement("div");
  BarCodeDescription.setAttribute("class", "BCDescription");
  BarCodeDescription.innerHTML = "SKU # " + codeBar;
  document.body.appendChild(BarCodeDescription);
    
}