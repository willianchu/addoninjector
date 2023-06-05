const site = window.location.hostname;

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
  const custom_element = document.createElement(tag);
  custom_element.setAttribute(attr_tag, attr_name);
  custom_element.innerHTML = value;
  document.body.appendChild(custom_element);
}

const codeBar = window.location.href.slice(-10);
const isAllDigits = /^\d{10}$/.test(codeBar);
if ((site == "www.homedepot.ca") && isAllDigits) {
  Add_Custom_Style(`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap');

  * {
    color: #00ff40 !important;
  }
    
  .js-custom_element {
    font-family: 'Libre Barcode 128', cursive !important;
    font-size: 200px;
    color: #000000 !important;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    z-index: 999999;
  }
  `);
  Create_Custom_Element(
    "div",
    "class",
    "js-custom_element",
    codeBar
    );
    
  }