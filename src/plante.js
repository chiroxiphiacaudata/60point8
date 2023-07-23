import './App.css';
import * as React from "react"

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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';


const Plante = () => {


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

    function createData(plant, comm, med, descr, agro) {
        return { plant, comm, med, descr, agro };
    }

    const ancestr = [
        createData('Acacia mearnsii', ' ', ' ', ' ', ' '),
        createData('Calliandra calothyrsus', ' ', ' ', ' ', ' '),
        createData('Grevillea robusta', ' ', ' ', ' ', ' '),
        createData('Leucaena leucocephala', ' ', ' ', ' ', ' '),
        createData('Albizia gummifera', ' ', ' ', ' ', ' '),
        createData('Erythrina abyssinica', ' ', ' ', ' ', ' '),
        createData('Moringa oleifera', ' ', ' ', ' ', ' '),
        createData('Mangifera indica', ' ', ' ', ' ', ' '),
        createData('Carica papaya', ' ', ' ', ' ', ' '),
    ];


    return (

        <><CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>L'existence et les subsistances des gens qui vivent le long des 60,8 kilomètres de l'axe routier Ishasha-Rutshuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                    action={action} />sont menacées tous les jours.<br /><br /></Typography>
        </CardContent>

            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">LIST OF TREES WITH A DISCRETE ANCESTRAL KNOWLEDGE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper} sx={{ maxHeight: 300, overflow: 'auto' }}>
                        <Table sx={{ minWidth: 1000, fontSize: 15 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tree name and species</TableCell>
                                    <TableCell align="center">Commercial use</TableCell>
                                    <TableCell align="center">Medicinal use</TableCell>
                                    <TableCell align="center">Agroforestry use</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ancestr.map((row) => (
                                    <TableRow
                                        key={ancestr.plant}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.plant}
                                        </TableCell>
                                        <TableCell align="center">{row.comm}</TableCell>
                                        <TableCell align="center">{row.med}</TableCell>
                                        <TableCell align="center">{row.descr}</TableCell>
                                        <TableCell align="center">{row.agro}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion >
        </>
    )
}


export default Plante;
