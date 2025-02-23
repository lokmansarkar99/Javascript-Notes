// The navigator Object
// The navigator object contains information about the browser and the system it is running on. It provides details like the browser name, version, and also supports geolocation and user-agent detection.

// Example: Using navigator object

// Get browser's user-agent string
console.log(navigator.userAgent); // Returns a string that identifies the browser and system

// Get browser language
console.log(navigator.language); // Example: "en-US"

// Geolocation Example: Checking if geolocation is available
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  }, function(error) {
    console.log("Error fetching geolocation: " + error.message);
  });
} else {
  console.log("Geolocation is not available in your browser.");
}
