import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { ZoomControl } from 'react-leaflet/ZoomControl'
import 'leaflet/dist/leaflet.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Legendfence from './Legendfence.tsx';


const Fencemap = () => {

    const center = [-0.8829280679712995, 29.506408240442255];
    const outerbounds = [
        [-1.2185696079035546, 29.37390439243266],
        [-0.6869623240320794, 29.677079926105765],
    ];

    return (

        <>

            <CardContent sx={{ maxWidth: 300 }}>
                <Typography component='div' className="titleh2" sx={{ mt: 2 }}>CONSERVATION-FORTERESSE
                    <Typography component='div' className="notemap" sx={{ mt: 2 }}><a href='https://www.alessandromusetta.com/geo/tiles/60point8/fence/map.html' target='_blank' rel='noopener noreferrer'>Consulter la carte interactive</a></Typography>
                </Typography>
            </CardContent>


            <MapContainer
                doubleClickZoom={false}
                center={center}
                zoom={12}
                scrollWheelZoom={false}
                zoomControl={false}
                minZoom={12}
                maxZoom={14}
                maxBounds={outerbounds}
                maxBoundsViscosity={1.0}
                style={{ height: "90vh", backgroundColor: 'rgba(221, 229, 217, 1)' }}
            >
                <TileLayer
                    url="https://www.alessandromusetta.com/geo/tiles/60point8/fence/{z}/{x}/{y}.png" />

                <ZoomControl position="bottomright" />

            </MapContainer>

            <Legendfence />


        </>
    )

}

export default Fencemap;
