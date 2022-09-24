import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const API_MAPTILER = import.meta.env.VITE_API_MAPTILER

const attributions = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';


export const topoLayer = new TileLayer({
	title: 'TopoLayer - MapTiler',
  type: 'base',
  visible: true,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=' + API_MAPTILER,
		tileSize: 512,
		maxZoom: 22,
	}),
});
export const maptiler_outdoor = new TileLayer({
	title: 'Outdoor - MapTiler',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=' + API_MAPTILER,
		tileSize: 512,
		maxZoom: 22,
	}),
});

export const streets = new TileLayer({
	title: 'Streets - MapTiler',
  type: 'base',
  visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + API_MAPTILER,
		tileSize: 512,
		maxZoom: 22,
	}),
});
