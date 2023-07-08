import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { ZoomControl } from 'react-leaflet/ZoomControl'
import 'leaflet/dist/leaflet.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Legenddef from './Legenddef.tsx';


const Defmap = () => {

    const center = [-0.9558, 29.4947];
    const outerbounds = [
        [-1.2185696079035546, 29.37390439243266],
        [-0.6869623240320794, 29.677079926105765],
    ];

    return (

        <>

            <CardContent sx={{ maxWidth: 350 }}>
                <Typography component='div' className="titleh2" sx={{ mt: 2 }}>UNE PERTE RADICALE DE RESSOURCES FORESTIÈRES
                    <Typography component='div' className="notemap" sx={{ mt: 2 }}><a href='https://www.alessandromusetta.com/geo/tiles/60point8/def/map.html' target='_blank' rel='noopener noreferrer'>Interact with the map</a></Typography>
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
                    url="https://www.alessandromusetta.com/geo/tiles/60point8/def/{z}/{x}/{y}.png" />

                <ZoomControl position="bottomright" />

            </MapContainer>

            <Legenddef />


        </>
    )

}

export default Defmap;