window.onload=init;
function init(){
    const map= new ol.Map({
        view: new ol.View({
            center:[1135177.6688529002,4238185.400268992],
            zoom:7,
         /*    maxZoom:10,
            minZoom:3, */
        }),
  /*       layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ], */
        target: "js-map"

    })

    //click
     map.on('click', function(e){
        console.log(e.coordinate);
    }) 

    // Base maps layers 
const openStreetMapStandard= new ol.layer.Tile({
    source: new ol.source.OSM(), 
    visible: true,
    title: "OSMStandard"
})
    const openStreetMapHumanitarian= new ol.layer.Tile({
        source: new ol.source.OSM({
            url:'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }), 
        visible: false,
        title: "OSMHumanitarian"
    })

    const StamenTerrain   = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
            attributions:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
                }), 
        visible: false,
        title: "Stamenterrain"
    })

    //layer Group
    const baseLayerGroup= new ol.layer.Group({
        layers:[openStreetMapStandard , openStreetMapHumanitarian , StamenTerrain]
    })
    map.addLayer(baseLayerGroup)  

    // layer Switcher Logic for Basemaps
    const baseLayerElements= document.querySelectorAll('.sidebar >input[type=radio]')
    for (let baseLayerElement of baseLayerElements){
            baseLayerElement.addEventListener('change' , function() {
            let baseLayerElementValue=this.value;
            baseLayerGroup.getLayers().forEach(function(element,index,array){
             let baseLayerTitle=element.get('title');
             element.setVisible(baseLayerTitle===baseLayerElementValue)
            });
        })
    }
    //vector LAyers
const EUCountriesGeoJSON= new ol.layer.VectorImage({
    source: new ol.source.Vector({
        url: "./data/vector_data/map.topojson",
        format: new  ol.format.GeoJSON(),
        crossOrigin: 'anonymous' 

    }),
    visible:true,
    title:'EUCountriesGEOJSON',

})
map.addLayer(EUCountriesGeoJSON)

} 