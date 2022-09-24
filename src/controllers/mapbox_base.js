// Listado de estilos.
// https://docs.mapbox.com/api/maps/styles/#mapbox-styles


import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const API_MAPBOX = import.meta.env.VITE_API_MAPBOX

const attributions = '<a href="https://www.mapbox.com/copyright/" target="_blank">&copy; Mapbox</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

export const mapbox_streets = new TileLayer({
	title: 'Streets - Mapbox',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + API_MAPBOX,
		tileSize: 512,
		maxZoom: 22,
	}),
});

export const mapbox_outdoors = new TileLayer({
	title: 'Outdoors - Mapbox',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token=' + API_MAPBOX,
		tileSize: 512,
		maxZoom: 22,
	}),
});

export const mapbox_satellite = new TileLayer({
	title: 'Satellite - Mapbox',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}@2x?access_token=' + API_MAPBOX,
		tileSize: 512,
		maxZoom: 22,
	}),
});

export const mapbox_satellite_streets = new TileLayer({
	title: 'Satellite Streets - Mapbox',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}@2x?access_token=' + API_MAPBOX,
		tileSize: 512,
		maxZoom: 22,
	}),
});
export const mapbox_navigation_day = new TileLayer({
	title: 'Navigation Day - Mapbox',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}@2x?access_token=' + API_MAPBOX,
		tileSize: 512,
		maxZoom: 22,
	}),
});
export const mapbox_navigation_night = new TileLayer({
	title: 'Navigation Night - Mapbox',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}@2x?access_token=' + API_MAPBOX,
		tileSize: 512,
		maxZoom: 22,
	}),
});