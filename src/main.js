import './style.css'

import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';

import Map from 'ol/Map';
import View from 'ol/View';
import LayerGroup from 'ol/layer/Group';

import { useGeographic } from 'ol/proj';
import { ZoomSlider, ScaleLine, Rotate, FullScreen } from 'ol/control';

import LayerSwitcher from 'ol-layerswitcher';

import { topoLayer,streets,osm,watercolor, opencyclemap, transport, landscape, outdoors, transport_dark, pioneer, mobile_atlas, neighbourhood } from './controllers/carto_base'
import * as Mapbox from './controllers/mapbox_base'
import { gjson_campos_futbol, gjson_rotondas } from './controllers/geoserver'

useGeographic();

//long. latitude.
const baleares = [2.73666372, 39.550997796];	

const cartografia_base = new LayerGroup({
	'title': 'Cartografia Base',
	layers: [
		topoLayer,
		streets,
		osm,
		watercolor,
		opencyclemap,
		transport,
		landscape,
		outdoors,
		transport_dark,
		pioneer,
		mobile_atlas,
		neighbourhood
	]
})

const mapbox_base = new LayerGroup({
	'title': 'Mapbox Layers',
	layers: [
		Mapbox.mapbox_streets,
		Mapbox.mapbox_outdoors,
	]
})

const geoserver = new LayerGroup({
	'title': 'Geoserver',
	layers: [
		gjson_campos_futbol,
		gjson_rotondas,
		// vector
	]
})

const map = new Map({
  target: 'map',
  view: new View({
		center: baleares,
    zoom: 9
  }),
	layers: [
		cartografia_base,
		mapbox_base,
		geoserver
	],
});

const layerSwitcher = new LayerSwitcher({
  reverse: false,
  groupSelectStyle: 'group'
});
map.addControl(layerSwitcher);

const rotateControl = new Rotate({
  autoHide: false
});
const fullScreen = new FullScreen()

const zoomslider = new ZoomSlider();
map.addControl(zoomslider);
map.addControl(rotateControl);
map.addControl(fullScreen);
map.addControl(new ScaleLine({ 
	units: 'metric',
	bar: true
}));
