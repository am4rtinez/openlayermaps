import OSM from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const API_MAPTILER = import.meta.env.VITE_API_MAPTILER
const API_THUNDERFOREST = import.meta.env.VITE_API_THUNDERFOREST
const API_MAPBOX = import.meta.env.VITE_API_MAPBOX

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

export const osm = new TileLayer({
  title: 'OSM',
  type: 'base',
  visible: false,
  source: new OSM()
});

export const watercolor = new TileLayer({
  title: 'Water color',
  type: 'base',
  visible: false,
  source: new SourceStamen({
    layer: 'watercolor'
  })
});

export const opencyclemap = new TileLayer({
	title: 'Thunderforest - OpenCycleMap',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const transport = new TileLayer({
	title: 'Thunderforest - Transport',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const landscape = new TileLayer({
	title: 'Thunderforest - Landscape',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const outdoors = new TileLayer({
	title: 'Thunderforest - Outdoors',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const transport_dark = new TileLayer({
	title: 'Thunderforest - Transport Dark',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const pioneer = new TileLayer({
	title: 'Thunderforest - Pioneer',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const mobile_atlas = new TileLayer({
	title: 'Thunderforest - Mobile Atlas',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const neighbourhood = new TileLayer({
	title: 'Thunderforest - Neighbourhood',
	type: 'base',
	visible: false,
	source: new XYZ({
			url: 'https://{a-c}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})
