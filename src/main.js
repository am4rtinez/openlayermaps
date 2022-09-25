import './style.css'

import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';

import Map from 'ol/Map';
import View from 'ol/View';
import LayerGroup from 'ol/layer/Group';

import { useGeographic } from 'ol/proj';
import { ZoomSlider, ScaleLine, Rotate, FullScreen } from 'ol/control';

import LayerSwitcher from 'ol-layerswitcher';

import { osm, watercolor, terrain, toner, opentopomap, memomaps_transport } from './controllers/carto_base'
import { topoLayer, streets, maptiler_outdoor } from './controllers/maptiler_base'
import { opencyclemap, transport, landscape, outdoors, transport_dark, pioneer, mobile_atlas, neighbourhood } from './controllers/thunderforest_base'
import * as Mapbox from './controllers/mapbox_base'
import { openseamap } from './controllers/layers'

import { gjson_campos_futbol, gjson_rotondas } from './controllers/geoserver'

useGeographic();

//long. latitude.
const baleares = [2.73666372, 39.550997796];	

const cartografia_base = new LayerGroup({
	'title': 'Cartografia Base',
	layers: [
		osm,
		watercolor,
		terrain,
		toner,
		opentopomap,
		memomaps_transport,
		openseamap
	]
})

const maptiler_base = new LayerGroup({
	'title': 'Maptiler Base',
	layers: [
		topoLayer,
		streets,
		maptiler_outdoor
	]
})

const mapbox_base = new LayerGroup({
	'title': 'Mapbox Layers',
	layers: [
		Mapbox.mapbox_streets,
		Mapbox.mapbox_outdoors,
		Mapbox.mapbox_satellite,
		Mapbox.mapbox_satellite_streets,
		Mapbox.mapbox_navigation_day,
		Mapbox.mapbox_navigation_night
	]
})

const thunderforest_base = new LayerGroup({
	'title': 'Thunderforest Layers',
	layers: [
		opencyclemap,
		transport,
		landscape,
		outdoors,
		transport_dark,
		pioneer,
		mobile_atlas,
		neighbourhood,
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

const layers = new LayerGroup({
	'title': 'Other Layers',
	layers: [
		openseamap
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
		maptiler_base,
		mapbox_base,
		thunderforest_base,
		geoserver,
		layers
	],
});

const layerSwitcher = new LayerSwitcher({
  reverse: false,
  groupSelectStyle: 'group'
});

const rotateControl = new Rotate({
	autoHide: false
});

const fullScreen = new FullScreen()

const zoomslider = new ZoomSlider();

map.addControl(layerSwitcher);
map.addControl(zoomslider);
map.addControl(rotateControl);
map.addControl(fullScreen);
map.addControl(new ScaleLine({ 
	units: 'metric',
	bar: true
}));
