import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { ZoomControl } from 'react-leaflet/ZoomControl'
import 'leaflet/dist/leaflet.css';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




const Basemap = () => {

    const center = [-0.8800228962716014, 29.569242783518817];
    const outerbounds = [
        [-1.2185696079035546, 29.37390439243266],
        [-0.6869623240320794, 29.677079926105765],
    ];

    return (

        <>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title" sx={{ mt: 2 }}><i>60.8 KM</i>,< br />A BLOODY ROAD< br />
                    <Typography component='div' className="notemap" sx={{ mt: 2 }}><a href='https://www.alessandromusetta.com/geo/tiles/60point8/base/map.html' target='_blank' rel='noopener noreferrer'>Open the interactive map</a></Typography>
                </Typography>
            </CardContent>

            <MapContainer
                doubleClickZoom={false}
                center={center}
                zoom={13}
                scrollWheelZoom={false}
                zoomControl={false}
                minZoom={12}
                maxZoom={14}
                maxBounds={outerbounds}
                maxBoundsViscosity={1.0}
                style={{ height: "90vh", backgroundColor: 'rgb(252, 250, 247)' }}
            >
                <TileLayer
                    url="https://www.alessandromusetta.com/geo/tiles/60point8/base/{z}/{x}/{y}.png" />

                <ZoomControl position="bottomright" />

            </MapContainer>


        </>
    )

}

export default Basemap;
