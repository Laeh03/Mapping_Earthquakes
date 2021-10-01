// Create the map object with a center and zoom level, Add a marker to the map for Los Angeles, California.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'

// Add a marker to the map for Los Angeles, California.
 L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);

 // Add a circle to the map
 L.circleMarker([34.0522, -118.2437], {
     radius: 300,
     color: "black",
     fillColor: '#ffffa1'
    }).addTo(map);