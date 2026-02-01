var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ManagementZone_1 = new ol.format.GeoJSON();
var features_ManagementZone_1 = format_ManagementZone_1.readFeatures(json_ManagementZone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManagementZone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManagementZone_1.addFeatures(features_ManagementZone_1);
var lyr_ManagementZone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManagementZone_1, 
                style: style_ManagementZone_1,
                popuplayertitle: 'Management Zone',
                interactive: true,
    title: 'Management Zone<br />\
    <img src="styles/legend/ManagementZone_1_0.png" /> MUZ<br />\
    <img src="styles/legend/ManagementZone_1_1.png" /> SPZ<br />\
    <img src="styles/legend/ManagementZone_1_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ManagementZone_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ManagementZone_1];
lyr_ManagementZone_1.set('fieldAliases', {'Zone': 'Zone', '% Coverage': '% Coverage', 'Area_ha': 'Area_ha', 'Name': 'Name', 'Municipali': 'LGU', 'Parcel_No': 'Parcel No', 'Area_map': 'Area_map', 'Perimeter': 'Perimeter', 'Area_sqm': 'Area_sqm', 'Area_final': 'Area_final', 'final_area': 'Area (ha)', });
lyr_ManagementZone_1.set('fieldImages', {'Zone': 'TextEdit', '% Coverage': 'TextEdit', 'Area_ha': 'TextEdit', 'Name': 'TextEdit', 'Municipali': 'TextEdit', 'Parcel_No': 'TextEdit', 'Area_map': 'TextEdit', 'Perimeter': 'TextEdit', 'Area_sqm': 'TextEdit', 'Area_final': 'TextEdit', 'final_area': 'TextEdit', });
lyr_ManagementZone_1.set('fieldLabels', {'Zone': 'inline label - visible with data', '% Coverage': 'hidden field', 'Area_ha': 'hidden field', 'Name': 'hidden field', 'Municipali': 'inline label - visible with data', 'Parcel_No': 'inline label - visible with data', 'Area_map': 'hidden field', 'Perimeter': 'hidden field', 'Area_sqm': 'hidden field', 'Area_final': 'no label', 'final_area': 'inline label - visible with data', });
lyr_ManagementZone_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});