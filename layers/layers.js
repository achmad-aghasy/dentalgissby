var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PrevalensiKeluhanBermasalahGigidanMulut_1 = new ol.format.GeoJSON();
var features_PrevalensiKeluhanBermasalahGigidanMulut_1 = format_PrevalensiKeluhanBermasalahGigidanMulut_1.readFeatures(json_PrevalensiKeluhanBermasalahGigidanMulut_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrevalensiKeluhanBermasalahGigidanMulut_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrevalensiKeluhanBermasalahGigidanMulut_1.addFeatures(features_PrevalensiKeluhanBermasalahGigidanMulut_1);
var lyr_PrevalensiKeluhanBermasalahGigidanMulut_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrevalensiKeluhanBermasalahGigidanMulut_1, 
                style: style_PrevalensiKeluhanBermasalahGigidanMulut_1,
                interactive: true,
    title: 'Prevalensi Keluhan Bermasalah Gigi dan Mulut (%)<br />\
    <img src="styles/legend/PrevalensiKeluhanBermasalahGigidanMulut_1_0.png" /> 2 - 4 <br />\
    <img src="styles/legend/PrevalensiKeluhanBermasalahGigidanMulut_1_1.png" /> 4 - 5,3 <br />\
    <img src="styles/legend/PrevalensiKeluhanBermasalahGigidanMulut_1_2.png" /> 5,3 - 6,5 <br />\
    <img src="styles/legend/PrevalensiKeluhanBermasalahGigidanMulut_1_3.png" /> 6,5 - 8 <br />\
    <img src="styles/legend/PrevalensiKeluhanBermasalahGigidanMulut_1_4.png" /> 8 - 11 <br />'
        });
var format_KategoriLiterasiMasyarakat_2 = new ol.format.GeoJSON();
var features_KategoriLiterasiMasyarakat_2 = format_KategoriLiterasiMasyarakat_2.readFeatures(json_KategoriLiterasiMasyarakat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KategoriLiterasiMasyarakat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KategoriLiterasiMasyarakat_2.addFeatures(features_KategoriLiterasiMasyarakat_2);
var lyr_KategoriLiterasiMasyarakat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KategoriLiterasiMasyarakat_2, 
                style: style_KategoriLiterasiMasyarakat_2,
                interactive: true,
    title: 'Kategori Literasi Masyarakat<br />\
    <img src="styles/legend/KategoriLiterasiMasyarakat_2_0.png" /> Buruk<br />\
    <img src="styles/legend/KategoriLiterasiMasyarakat_2_1.png" /> Cukup Buruk<br />\
    <img src="styles/legend/KategoriLiterasiMasyarakat_2_2.png" /> Cukup<br />\
    <img src="styles/legend/KategoriLiterasiMasyarakat_2_3.png" /> Cukup Baik<br />\
    <img src="styles/legend/KategoriLiterasiMasyarakat_2_4.png" /> Baik<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_PrevalensiKeluhanBermasalahGigidanMulut_1.setVisible(true);lyr_KategoriLiterasiMasyarakat_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PrevalensiKeluhanBermasalahGigidanMulut_1,lyr_KategoriLiterasiMasyarakat_2];
lyr_PrevalensiKeluhanBermasalahGigidanMulut_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'Kecamatan': 'Kecamatan', 'SDS': 'Prevalensi Keluhan Bermasalah Gigi dan Mulut', 'PPG': 'Kategori Literasi Masyarakat', });
lyr_KategoriLiterasiMasyarakat_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'Kecamatan': 'Kecamatan', 'SDS': 'Prevalensi Keluhan Bermasalah Gigi dan Mulut', 'PPG': 'Kategori Literasi Masyarakat', });
lyr_PrevalensiKeluhanBermasalahGigidanMulut_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'SDS': 'TextEdit', 'PPG': 'TextEdit', });
lyr_KategoriLiterasiMasyarakat_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'SDS': 'TextEdit', 'PPG': 'TextEdit', });
lyr_PrevalensiKeluhanBermasalahGigidanMulut_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'Kecamatan': 'header label', 'SDS': 'header label', 'PPG': 'header label', });
lyr_KategoriLiterasiMasyarakat_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'Kecamatan': 'header label', 'SDS': 'header label', 'PPG': 'header label', });
lyr_KategoriLiterasiMasyarakat_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});