import Geocode from 'react-geocode';

const init = () => {
    Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY);
};

const getLocationFromCoords = (lat, lng, setAddress) => {
    return Geocode.fromLatLng(lat, lng).then((value) => {
        setAddress(value.results[0].formatted_address);
    });
};

const getCoordsFromLocation = (location) => {
    return Geocode.fromAddress(location);
};

const setRegion = (region) => {
    Geocode.setRegion(region);
};

export default {
    init,
    getCoordsFromLocation,
    getLocationFromCoords,
    setRegion,
};
