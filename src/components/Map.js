import React, {Component} from 'react';
import styled from 'styled-components/macro';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const PreferMap = styled(Map)`
    max-width: 700px;
    max-height: 700px;
    top: 30vh;
    left: 30vh;
`;


    class MapCharts extends Component {
        constructor(props){
            super(props);
            this.state = { zoom: 16}
        }

        render(){

            const { data, setLocation} = this.props;
        return (
            <PreferMap google={this.props.google} zoom={this.state.zoom} style={{width: '100%', height: '100%', position: 'relative'}}>
                {data.map((e)=>(
                <Marker onClick={() => setLocation({lat: e.lat, lng: e.lng})} position={{lat: e.lat, lng: e.lng}} />
                ))}
            </PreferMap>
        )
        }
    }

    export default GoogleApiWrapper({
        apiKey: process.env.REACT_APP_GOOGLE_CLOUD_API_KEY,
    })(MapCharts);