import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const API_THUNDERFOREST = import.meta.env.VITE_API_THUNDERFOREST

const attributions = 'Maps <a href="https://www.thunderforest.com" target="_blank">&copy; Thunderforest</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';


export const opencyclemap = new TileLayer({
	title: 'Thunderforest - OpenCycleMap',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const transport = new TileLayer({
	title: 'Thunderforest - Transport',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const landscape = new TileLayer({
	title: 'Thunderforest - Landscape',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const outdoors = new TileLayer({
	title: 'Thunderforest - Outdoors',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const transport_dark = new TileLayer({
	title: 'Thunderforest - Transport Dark',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const pioneer = new TileLayer({
	title: 'Thunderforest - Pioneer',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const mobile_atlas = new TileLayer({
	title: 'Thunderforest - Mobile Atlas',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

export const neighbourhood = new TileLayer({
	title: 'Thunderforest - Neighbourhood',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=' + API_THUNDERFOREST
	})
})

