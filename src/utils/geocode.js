import Geocode from 'react-geocode';

const init = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_CLOUD_API_KEY);
};

const getLocationFromCoords = async (lat, lng, setAddress) => {
    await Geocode.fromLatLng(lat, lng).then((value) => {
        setAddress(value.results[0].formatted_address);
    });
};

const getCoordsFromLocation = async (location, setLocation) => {
    await Geocode.fromAddress(location).then((value) => {
        setLocation({ lat: value.results[0].lat, lng: value.results[0].lng });
    });
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
