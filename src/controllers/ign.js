import TileLayer from 'ol/layer/Tile';
import WMTS from 'ol/source/WMTS';
import TileWMS from 'ol/source/TileWMS';

export async function layerSet(layerGroup){
	let response = await fetch('../json/ign.json');
	let services = await response.json();
	for (let service of services) {
		for (let layer of service.layers){
			layerGroup.getLayers().push(new TileLayer({
				title: layer.title,
				visible: false,
				source: new TileWMS({
					url: service.url,
					crossOrigin: 'anonymous',
					params: { 
						"LAYERS": layer.name 
					}
				})
			}))
		}
	}
}



// export const ign1 = new TileLayer({
// 	title : 'IGN1',
// 	visible: false,
// 	source: new WMTS({
// 		url: 'https://www.ign.es/wmts/mapa-raster?request=GetCapabilities&service=WMTS',
// 		format: 'image/jpeg',
// 		projection: 'EPSG:44326',
// 		matrixSet: 'PM'
// 	})
// })

// export const capaWMS10 = new TileLayer({
// 	title: 'Ultimos 10 dias',
// 	visible: false,
// 	source: new TileWMS({
// 		url: "https://www.ign.es/wms-inspire/geofisica",
// 		crossOrigin: 'anonymous',
// 		params: { 
// 			"LAYERS": "Ultimos10dias" 
// 		}
// 	})
// });

// export const capaWMS30 = new TileLayer({
// 	title: 'Ultimos 30 dias',
// 	visible: false,
// 	source: new TileWMS({
// 		url: "https://www.ign.es/wms-inspire/geofisica",
// 		crossOrigin: 'anonymous',
// 		params: { 
// 			"LAYERS": "Ultimos30dias" 
// 		}
// 	})
// });

// export const capaWMS365 = new TileLayer({
// 	title: 'Ultimos 365 dias',
// 	visible: false,
// 	source: new TileWMS({
// 		url: "https://www.ign.es/wms-inspire/geofisica",
// 		crossOrigin: 'anonymous',
// 		params: { 
// 			"LAYERS": "Ultimos365dias" 
// 		}
// 	})
// });

// export const ocupacion = new TileLayer({
// 	title: 'Ultimos 365 dias',
// 	visible: false,
// 	source: new TileWMS({
// 		url: "https://servicios.idee.es/wms-inspire/ocupacion-suelo",
// 		crossOrigin: 'anonymous',
// 		params: { 
// 			"LAYERS": "LC.LandCoverSurfaces" 
// 		}
// 	})
// });
