<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.1/dist/leaflet-src.js"></script>
<script src="https://unpkg.com/esri-leaflet@2.0.4"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://rawgit.com/Leaflet/Leaflet.heat/gh-pages/dist/leaflet-heat.js"></script>
<script src="https://cdn.jsdelivr.net/leaflet.esri.heatmap-feature-layer/2.0.0-beta.1/esri-leaflet-heatmap-feature-layer.js"></script>

var map = L.map('map').setView([39.758196, -104.826306],11);

mapLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWJsYW5jb2MiLCJhIjoiY2lyb2FkeG5jMGJtNnQ3bmt5NG9mZGJ0byJ9.QQqU9avJdMR_AXnP40GRxw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mblancoc.1347oeaf',
//			accessToken: 'pk.eyJ1IjoibWJsYW5jb2MiLCJhIjoiY2lyb2FkeG5jMGJtNnQ3bmt5NG9mZGJ0byJ9.QQqU9avJdMR_AXnP40GRxw'
}).addTo(map);
