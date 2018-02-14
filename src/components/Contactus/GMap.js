import React from 'react';
import {
    Card,
    CardText,
    CardTitle,
    CardHeader,
    CardActions
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';
import { GoogleMap, Marker } from "react-google-maps";

import GoogleMapReact from 'google-map-react';
import {Row,Col,Grid} from 'react-flexbox-grid'

const AnyReactComponent = ({ text }) => <div><FontAwesome size='4x' name='map-marker'/></div>;

class GMap extends React.Component{
    state={

    }
    static defaultProps = {
        center: {lat: 12.9723913, lng: 79.15767519999997},
        zoom: 14
    };
    componentDidMount(){
    }
    render(){
        const GoogleMapConfig = {
        	key: 'AIzaSyA9Gz9EDiM21X1G0Lkp_Wn71NKDhKRVcEY'
        };
        return(
          <div className="gmaps">
                <GoogleMapReact
                    bootstrapURLKeys={GoogleMapConfig}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={12.9723913}
                            lng={79.15667519999997}
                            text={'VIT, Vellore'}
                        />
                </GoogleMapReact>
              </div>
            )
        }
    }

    export default GMap
