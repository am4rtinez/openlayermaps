import OSM from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export const osm = new TileLayer({
  title: 'OSM',
  type: 'base',
  visible: false,
  source: new OSM()
});

export const terrain = new TileLayer({
  title: 'Terrain',
  type: 'base',
  visible: false,
  source: new SourceStamen({
    layer: 'terrain'
  })
});
export const watercolor = new TileLayer({
  title: 'Water color',
  type: 'base',
  visible: false,
  source: new SourceStamen({
    layer: 'watercolor'
  })
});
export const toner = new TileLayer({
  title: 'Toner',
  type: 'base',
  visible: false,
  source: new SourceStamen({
    layer: 'toner'
  })
});

const attributions = '<a href="https://opentopomap.org" target="_blank">&copy; OpenTopoMap (CC-BY-SA)</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> | SRTM';

export const opentopomap = new TileLayer({
	title: 'OpenTopoMap',
	type: 'base',
	visible: false,
	source: new XYZ({
		attributions: attributions,
		url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png'
	})
})

export const memomaps_transport = new TileLayer({
	title: 'Memomaps Transport',
	type: 'base',
	visible: false,
	source: new XYZ({
		// attributions: attributions,
		url: 'https://tile.memomaps.de/tilegen/${z}/${x}/${y}.png'
	})
})