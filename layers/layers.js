var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_airports_1 = new ol.format.GeoJSON();
var features_airports_1 = format_airports_1.readFeatures(json_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airports_1.addFeatures(features_airports_1);
var lyr_airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airports_1, 
                style: style_airports_1,
                popuplayertitle: 'airports',
                interactive: true,
    title: 'airports<br />\
    <img src="styles/legend/airports_1_0.png" /> major<br />\
    <img src="styles/legend/airports_1_1.png" /> major and military<br />\
    <img src="styles/legend/airports_1_2.png" /> mid<br />\
    <img src="styles/legend/airports_1_3.png" /> mid and military<br />\
    <img src="styles/legend/airports_1_4.png" /> military<br />\
    <img src="styles/legend/airports_1_5.png" /> military major<br />\
    <img src="styles/legend/airports_1_6.png" /> military mid<br />\
    <img src="styles/legend/airports_1_7.png" /> small<br />\
    <img src="styles/legend/airports_1_8.png" /> spaceport<br />\
    <img src="styles/legend/airports_1_9.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_airports_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_airports_1];
lyr_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Type': 'Type', });
lyr_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'Type': 'TextEdit', });
lyr_airports_1.set('fieldLabels', {'name': 'no label', 'abbrev': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'Type': 'no label', });
lyr_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});