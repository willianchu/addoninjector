// Add on Test
// Get the URL
const site = window.location.hostname;
// Add a Javascript codebar Generator library into the website head tag


// Find and transform SKUs into barcodes
function transformSKUsIntoBarcodes() {
  const skuElements = document.querySelectorAll(":contains('SKU')");

  skuElements.forEach((element) => {
    const text = element.textContent;
    const regex = /SKU\s+#\s+(\d+)/;
    const match = text.match(regex);

    if (match) {
      const skuNumber = match[1];
      const barcodeImageURL = generateBarcode(skuNumber);

      // Replace the SKU text with the barcode image
      const barcodeImageElement = document.createElement("img");
      barcodeImageElement.src = barcodeImageURL;
      element.textContent = "";
      element.appendChild(barcodeImageElement);
    }
  });
}

// Add Custom CSS - Function style inside the website head tag
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

// Create Custom Element - Function style inside the website body tag
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
  const custom_element = document.createElement(tag);
  custom_element.setAttribute(attr_tag, attr_name);
  custom_element.innerHTML = value;
  document.body.appendChild(custom_element);
}


// JS codes for youtube
if (site == "www.youtube.com") {
  Add_Custom_Style(`
    @import url("https://fonts.googleapis.com/css?family=Raleway");

    * {
      font-family: "Raleway" !important;
      color: #00ff40 !important;	
    }
    ytd-channel-about-metadata-renderer {
      zoom: 1.6;
    }

    #meta.ytd-c4-tabbed-header-renderer {
      zoom: 1.3;
    }

    #js-custom_element {
      font-size: 60px;
      padding: 150px 0;
      color: #ff0037 !important;
      background: #fffffff2;
      position: fixed;
      top: 0;
      text-align: center;
      width: 100%;
      z-index: 999999;
    }

    .js-custom_element {
      font-size: 60px;
      padding: 150px 0;
      color: #008dff !important;
      background-color: #fffffff2;
      position: fixed;
      bottom: 0;
      text-align: center;
      width: 100%;
      z-index: 999999;
    }
  `);

  // Create_Custom_Element(
  //   "div",
  //   "id",
  //   "js-custom_element",
  //   "This is a custom element id!"
  //   );
  // Create_Custom_Element(
  //   "div",
  //   "class",
  //   "js-custom_element",
  //   "This is a custom class element!"
  //   );
}

// JS codes for google
if (site == "www.google.com") {
  Add_Custom_Style(`
    @import url("https://fonts.googleapis.com/css?family=Raleway");

    * {
      font-family: "Raleway" !important;
      color: #00ff40 !important;	
    }
    ytd-channel-about-metadata-renderer {
      zoom: 1.6;
    }

    #meta.ytd-c4-tabbed-header-renderer {
      zoom: 1.3;
    }

    #js-custom_element {
      font-size: 60px;
      padding: 150px 0;
      color: #ff0037 !important;
      background: #fffffff2;
      position: fixed;
      top: 0;
      text-align: center;
      width: 100%;
      z-index: 999999;
    }

    .js-custom_element {
      font-size: 60px;
      padding: 150px 0;
      color: #008dff !important;
      background-color: #fffffff2;
      position: fixed;
      bottom: 0;
      text-align: center;
      width: 100%;
      z-index: 999999;
    }
  `);

  // Create_Custom_Element(
  //   "div",
  //   "id",
  //   "js-custom_element",
  //   "This is a custom element id!"
  //   );
  // Create_Custom_Element(
  //   "div",
  //   "class",
  //   "js-custom_element",
  //   "This is a custom class element!"
  //   );
}

// JS codes for microsoft
if (site == "www.microsoft.com") {
  Add_Custom_Style(`
    * {
      filter: invert(1) !important;
    }
  `);	
}

// JS codes for homedepot.ca
const codeBar = window.location.href.slice(-10);
const isAllDigits = /^\d{10}$/.test(codeBar);
if ((site == "www.homedepot.ca") && isAllDigits) {
  Add_Custom_Style(`
  @import url("https://fonts.googleapis.com/css?family=Raleway");

  * {
    font-family: "Raleway" !important;
    color: #00ff40 !important;	
  
  .js-custom_element {
    font-size: 60px;
    padding: 100px 0;
    color: #008dff !important;
    background-color: #fffffff2;
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


    // #js-custom_element {
    //   font-size: 60px;
    //   padding: 150px 0;
    //   color: #ff0037 !important;
    //   background: #fffffff2;
    //   position: fixed;
    //   top: 0;
    //   text-align: center;
    //   width: 100%;
    //   z-index: 999999;
    // }
    
    // Create_Custom_Element(
      //   "div",
      //   "id",
      //   "js-custom_element",
      //   "This is a custom element id!"
      //   );