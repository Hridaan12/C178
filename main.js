mapboxgl.accessToken="pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

var lat = 22.7868542, log = 88.3643296;
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [log, lat],
    zoom: 16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy: true},
        trackUserLocation:true,

    })
)

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    })
)