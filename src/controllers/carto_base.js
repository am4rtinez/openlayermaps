import OSM from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import TileLayer from 'ol/layer/Tile';

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
