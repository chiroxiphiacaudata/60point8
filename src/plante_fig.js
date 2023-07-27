import './App.css';
import * as React from "react"

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Acacia from "./img/acacia.png";
import Calliandra from "./img/calliandra.png";
import Grevillea from "./img/grevillea.png";
import Leucaena from "./img/leucaena.png";
import Albizia from "./img/albizia.png";
import Erythrina from "./img/erythrina.png";
import Moringa from "./img/moringa.png";
import Mangifera from "./img/mangifera.png";
import Carica from "./img/carica.png";

const PlanteFig = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (

        <> <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Acacia mearnsii"
                            height="180"
                            image={Acacia}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Acacia mearnsii</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Calliandra calothyrsus"
                            height="180"
                            image={Calliandra}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom ><i>Calliandra calothyrsus</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Grevillea robusta"
                            height="180"
                            image={Grevillea}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom ><i>Grevillea robusta</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Leucaena leucocephala"
                            height="180"
                            image={Leucaena}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Leucaena leucocephala</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Albizia gummifera"
                            height="180"
                            image={Albizia}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Albizia gummifera</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Erythrina abyssinica"
                            height="180"
                            image={Erythrina}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Erythrina abyssinica</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Moringa oleifera"
                            height="180"
                            image={Moringa}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Moringa oleifera</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Mangifera indica"
                            height="180"
                            image={Mangifera}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Mangifera indica</i></Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Carica papaya"
                            height="180"
                            image={Carica}
                            sx={{ objectFit: "contain" }} />
                        <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom><i>Carica papaya</i></Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}


export default PlanteFig;
