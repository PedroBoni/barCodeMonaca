const buttonReadBarCode = document.querySelector(".container button");

buttonReadBarCode.addEventListener("click", ()=> {
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        let data = JSON.parse(localStorage.getItem("data"));
        if(!result.cancelled){
          const container = document.querySelector(".container");
          const divResult = document.querySelector("#result");
          let found = false;

          if(divResult)
            container.removeChild(divResult);
          
          for(let i = 0; i < (data.products).length; i++){
            if(result.text  == data.products[i].productCode){ 
              found = true             
              let htmlResult = `
              <div id="result" class="mt-2">
                <h4>${data.products[i].productName}</h1>
                <small class="text-muted">${data.products[i].productCode}</small>
                <img src="${data.products[i].productImageURL}" class="img-fluid">
                <h5>R$ ${(data.products[i].productValue).toLocaleString('pt-BR')}</h6>
                <p>Descrição:</p>
                <p>${data.products[i].description}</p>
              </div>`;
              document.querySelector(".container").insertAdjacentHTML('beforeend', htmlResult);
            }
          }
          if(!found){
              let htmlResult = `
              <div id="result" class="mt-2">
                <h4>Produto não encontrado</h1>
                <p>Tente novamente</p>                  
              </div>`;
            document.querySelector(".container").insertAdjacentHTML('beforeend', htmlResult);
          }          
        }
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: true // iOS and Android
      }
   );
}, false); 

 