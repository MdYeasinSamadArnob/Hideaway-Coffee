import L from 'leaflet';

const Icon = new L.Icon({
    iconUrl: require('../../Icon/hide-away-coffee-logo.svg'),
    iconRetinaUrl: require('../../Icon/hide-away-coffee-logo.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { Icon };