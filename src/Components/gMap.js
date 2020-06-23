//loads the google api and provides functionality 
// declare google as global var for use
/*global google*/

var script = document.createElement('script');
//'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
script.src ='https://maps.googleapis.com/maps/api/js?key=&callback=initMap';
script.defer = true;
script.async = true;

// Attaches callback function to the window
window.initMap = function() {
    //renders the map
    let map = new google.maps.Map(document.getElementById("map"), {center: {lat: 36, lng: -86}, zoom: 8});

    //adds a marker to the map
    let mark = document.getElementById("mark");
    mark.onclick = function()
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(addMarker);
            
        }
    
        else
        {
            alert('Geolocation is not supported by your browser or device. Make sure location settings are enabled and allowed.')
        }
    }


    function addMarker(position)
    {
        map.setCenter({lat:position.coords.latitude, lng:position.coords.longitude});
        new google.maps.Marker({position: {lat:  position.coords.latitude, lng: position.coords.longitude}, map: map});
    }
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
      


//new google.maps.Map(document.getElementById("map"), {center: {lat: -34, lng: 150}, zoom: 5});
//new google.maps.Marker({position: {lat: -25.344, lng: 131.036}, map: map});