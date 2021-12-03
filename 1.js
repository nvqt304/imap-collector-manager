var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnZxdDMwNCIsImEiOiJja3dxNTh1YXUwajdnMm9tbnpneG90ZG8wIn0.QEHxlrh8yAC8xgCCQTTaXQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibnZxdDMwNCIsImEiOiJja3dxNTh1YXUwajdnMm9tbnpneG90ZG8wIn0.QEHxlrh8yAC8xgCCQTTaXQ'
}).addTo(map);
