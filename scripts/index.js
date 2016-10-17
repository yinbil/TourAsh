  //Camera Here
(function() {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  var pictureSource;
  var destinationType;
  function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;

    document.getElementById("capturePhoto").onclick = function() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality : 50,

        destinationType : destinationType.DATA_URL
      });
    }
      
      
  
  };
  function onPhotoDataSuccess(imageData) {

    var smallImage = document.getElementById('smallImage');

    smallImage.style.display = 'block';

    smallImage.src = "data:image/jpeg;base64," + imageData;

  }

  function onFail(message) {

    alert('Failed because: ' + message);

  }

})();

  //Geolocation Here
(function(){
  var x = document.getElementById("location");

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }
})();

  // Barcode Scanner Here

(function() {

  cordova.plugins.barcodeScanner.scan(
      document.getElementById("scancode").onclick =function (result) {
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
})();

