import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Icon, Fill, Stroke, Style } from 'ol/style';

export const gjson_campos_futbol = new VectorLayer({
	title: 'GeoJSON Campos Futbol',
	visible: false,
  source: new VectorSource({
    format: new GeoJSON(),
    url: 'http://geoserver.112ib.com/SEIB112/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=SEIB112:CampsFutbol&outputFormat=application/json&srsname=EPSG:4326',
  }),
	style: new Style ({
		image: new Icon({
			src: 'http://geoserver.112ib.com/styles/SEIB112/imagenes/futbol.png' 
		})
	})
});

export const gjson_rotondas = new VectorLayer({
	title: 'GeoJSON Rotondas',
	visible: false,
  source: new VectorSource({
    format: new GeoJSON(),
    url: 'http://geoserver.112ib.com/SEIB112/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=SEIB112:Rotondes_Balears&outputFormat=application/json&srsname=EPSG:4326',
  }),
	style: new Style ({
		image: new Icon({
			src: 'http://geoserver.112ib.com/styles/SEIB112/imagenes/rotonda.png' 
		})
	})
});

export const rotondas = new TileLayer({
	title: 'Rotondas',
	visible: false,
	source: new TileWMS({
		url: 'http://geoserver.112ib.com/geoserver/wms',
		crossOrigin: 'anonymous',
		params: {
			'LAYERS': 'SEIB112:Rotondes_Balears',
			'VERSION': '1.3.0',
			'FORMAT': 'image/png',
			'styles': 'SEIB112:XarxaViaria_Rotondes',
			'TILED': true
		},
		serverType: 'geoserver'
	}),
	style: new Style({
		image: new Icon ({
			src: 'http://geoserver.112ib.com/styles/SEIB112/imagenes/rotonda.png'
		})
	})
})