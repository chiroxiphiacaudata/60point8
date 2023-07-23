import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { ZoomControl } from 'react-leaflet/ZoomControl'
import 'leaflet/dist/leaflet.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Legendblock from './Legendblock.tsx';


const Blockmap = () => {

    const center = [-0.9558, 29.4947];
    const outerbounds = [
        [-1.2185696079035546, 29.37390439243266],
        [-0.6869623240320794, 29.677079926105765],
    ];

    return (

        <>

            <CardContent sx={{ maxWidth: 300 }}>
                <Typography component='div' className="titleh2" sx={{ mt: 2 }}>TAXATION DU CIRCUIT DU MAKALA ET DES RESSOURCES NATURELLES
                    <Typography component='div' className="notemap" sx={{ mt: 2 }}><a href='https://www.alessandromusetta.com/geo/tiles/60point8/block/map.html' target='_blank' rel='noopener noreferrer'>Interact with the map</a></Typography>
                </Typography>
            </CardContent>


            <MapContainer
                doubleClickZoom={false}
                center={center}
                zoom={12}
                scrollWheelZoom={false}
                zoomControl={false}
                minZoom={12}
                maxZoom={13}
                maxBounds={outerbounds}
                maxBoundsViscosity={1.0}
                style={{ height: "90vh", backgroundColor: 'rgba(221, 229, 217, 1)' }}
            >
                <TileLayer
                    url="https://www.alessandromusetta.com/geo/tiles/60point8/block/{z}/{x}/{y}.png" />

                <ZoomControl position="bottomright" />

            </MapContainer>

            <Legendblock />


        </>
    )

}

export default Blockmap;
