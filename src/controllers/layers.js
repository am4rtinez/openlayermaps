import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export const openseamap = new TileLayer({
	title: 'OpenSeaMap',
	visible: false,
  source: new OSM({
    attributions: [
      ' © <a href="https://www.openseamap.org/">OpenSeaMap</a>',
    ],
    opaque: false,
    url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
  }),
});