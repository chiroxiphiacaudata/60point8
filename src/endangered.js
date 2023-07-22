import './App.css';
import * as React from "react"

import Pan from "./img/Pan_troglodytes.png";
import Gorilla from "./img/Gorilla_beringei.png";
import Phataginus from "./img/Phataginus_tricuspis.png";
import Africana from "./img/Loxodonta_africana.png";
import Loxodonta from "./img/Loxodonta_cyclotis.png";
import Smutsia from "./img/Smutsia_gigantea.png";
import Graueri from "./img/Leptosiaphos_graueri.png";
import Tarella from "./img/Crocidura_tarella.png";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const Endangered = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }

        setOpen(false)
    }

    const handleCloseNote = () => setOpen(false);

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    return (
        <><CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>Text<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="text"
                    action={action} /></Typography>
        </CardContent><Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Pan"
                                height="200"
                                image={Pan}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ENDANGERED<br /><i>Pan troglodytes</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=""
                                height="200"
                                image={Gorilla}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>CRITICALLY ENDANGERED<br /><i>Gorilla beringe</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=" "
                                height="200"
                                image={Phataginus}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ENDANGERED<br /><i>Phataginus tricuspis</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=" "
                                height="200"
                                image={Africana}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ENDANGERED<br /><i>Loxodonta africana</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=" "
                                height="200"
                                image={Loxodonta}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>CRITICALLY ENDANGERED<br /><i>Loxodonta cyclotis</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=" "
                                height="200"
                                image={Smutsia}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ENDANGERED<br /><i>Smutsia gigantea</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=" "
                                height="200"
                                image={Graueri}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ENDANGERED<br /><i>Leptosiaphos graueri</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt=" "
                                height="200"
                                image={Tarella}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ENDANGERED<br /><i>Crocidura tarella</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Endangered;