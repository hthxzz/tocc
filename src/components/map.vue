<template>
    <div class="container">
        <div class="map" id="map" ref="map"></div>
        <!-- <div id="info">&nbsp;</div> -->
        <popup></popup>
    </div>
</template>

<script>
      import Map from 'ol/Map.js';
      import View from 'ol/View.js';
      import GeoJSON from 'ol/format/GeoJSON.js';
      import VectorLayer from 'ol/layer/Vector.js';
      import VectorSource from 'ol/source/Vector.js';
      import {Fill, Stroke, Style, Text} from 'ol/style.js';
      import popup from './popup.vue';
    export default {
        name: 'Amap',
        data() {
            return {
                name:""
            }
        },
        components: {
          popup
        },
        mounted () {
          console.log('aaaaaaaaaaaaaaa');
          
          let mapdom = document.querySelector("#map");
          mapdom.style.width = mapdom.getBoundingClientRect().width + 'px';
          mapdom.style.height = mapdom.getBoundingClientRect().height + 'px';

              var style = new Style({
                fill: new Fill({
          color: 'rgba(16, 40, 99, 1.6)'
        }),
        stroke: new Stroke({
          color: '#319FD3',
          width: 1
        }),
        text: new Text({
          font: '12px Microsoft YaHei,sans-serif',
          fill: new Fill({
            color: '#fff'
          }),
          // stroke: new Stroke({
          //   color: 'rgb( 166, 255, 244 )',
          //   width: 1
          // })
        })
      });
      var vectorLayer = new VectorLayer({
        source: new VectorSource({
          url: 'https://geo.datav.aliyun.com/areas/bound/510100_full.json',
          format: new GeoJSON()
        }),
        style: function(feature) {
          style.getText().setText(feature.get('name'));
          return style; 
        }
      });

      var map = new Map({
        layers: [vectorLayer],
        target: 'map',
        view: new View({
          center: [103.992992,30.529185],
          zoom: 9,
          projection:"EPSG:4326"
        })
      });
      map.on('click',((e)=>{
        console.log(e);
        
      }))
       this.$root.maps = map;
      var highlightStyle = new Style({
        stroke: new Stroke({
          color: '#f00',
          width: 1
        }),
        fill: new Fill({
          color: 'rgba(255,0,0,0.1)'
        }),
        text: new Text({
          font: '12px Calibri,sans-serif',
          fill: new Fill({
            color: '#000'
          }),
          stroke: new Stroke({
            color: '#f00',
            width: 3
          })
        })
      });

      var featureOverlay = new VectorLayer({
        source: new VectorSource(),
        map: map,
        style: function(feature) {
          highlightStyle.getText().setText(feature.get('name'));
          return highlightStyle;
        }
      });

      var highlight;
      // var displayFeatureInfo = function(pixel) {

      //   var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
      //     return feature;
      //   });

      //   var info = document.getElementById('info');
      //   if (feature) {
      //     info.innerHTML = feature.getId() + ': ' + feature.get('name');
      //   } else {
      //     info.innerHTML = '&nbsp;';
      //   }

      //   if (feature !== highlight) {
      //     if (highlight) {
      //       featureOverlay.getSource().removeFeature(highlight);
      //     }
      //     if (feature) {
      //       featureOverlay.getSource().addFeature(feature);
      //     }
      //     highlight = feature;
      //   }

      // };

      map.on('pointermove', function(evt) {
        if (evt.dragging) {
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        // displayFeatureInfo(pixel);
      });

      map.on('click', function(evt) {
        // displayFeatureInfo(evt.pixel);
      });
        }
    }
</script>
git remote add origin git@github.com:hthxzz/bs.git
<style  scoped>
    .container{
        height: 100%;
        width: 100%;
    }
    .map{
        height: 100%;
        width: 100%;
    }

</style>