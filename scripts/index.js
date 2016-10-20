  //Camera Here
(function() {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  var pictureSource;
  var destinationType;
  function onDeviceReady() {  // Beginning of onDeviceReady function
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;

    //Camera Here
    document.getElementById("capturePhoto").onclick = function() { 
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality : 50,

        destinationType : destinationType.DATA_URL
      });
    }
      
  };  // End of onDeviceReady function


  // Camera vital functions
  function onPhotoDataSuccess(imageData) { //Begins here

    var smallImage = document.getElementById('smallImage');

    smallImage.style.display = 'block';

    smallImage.src = "data:image/jpeg;base64," + imageData;

  }

  function onFail(message) {

    alert('Failed because: ' + message);

  }  // Ends here

})();




// Barcode Here

(function() {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  
  // onDeviceReady function here
  function onDeviceReady() {  // Beginning of onDeviceReady function
    
    // Barcode Scanner Here
    document.getElementById("scancode").onclick = function() {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
          alert("Scanning failed: " + error);
        },
        {
          "preferFrontCamera" : true, // iOS and Android
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }
    );

    }

      
  };  // End of onDeviceReady function

})();


// Geolocation here

(function() {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  
  // onDeviceReady function here
  function onDeviceReady() {  // Beginning of onDeviceReady function
    
  document.getElementById("locationdata").addEventListener("click", function(){   
      navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHigherAccuracy:true});
    });
  

      
  };  // End of onDeviceReady function

   // Geolocation vital function
  var onSuccess = function(position){ // begins here
    alert('Latitude' + position.coords.latitude + '\n'
      + 'Longitude' + position.coords.longitude + '\n'
      + '<hr />' + element.innerHTML;
      );
  };

  function onError(error){ 
    alert('code' + error.code + '\n' + 'message' + error.message + '\n');
  } // Ends here


})();


// watchPosition function here

(function() {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  
  // onDeviceReady function here
  function onDeviceReady() {  // Beginning of onDeviceReady function
    
    var watchId = navigator.geolocation.watchPosition(onWatchSuccess, onWatchError, {
      timeout : 30000
    });

    document.getElementById("clearWatchbtn").addEventListener("click", function() {
      navigator.geolocation.clearWatch(watchID);
    });
  

      
  };  // End of onDeviceReady function

   // watchPosition vital functions
  var onWatchSuccess = function(position) {
    var element = document.getElementById('divWatchMeMove');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude + '<br />' + '<hr />' + element.innerHTML;
  };

  function onWatchError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
  }
  

})();


