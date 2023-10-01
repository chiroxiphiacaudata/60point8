import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Close from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(221, 229, 217, 1)',
  border: '2px solid rgba(251, 90, 80, 1)',
  boxShadow: 24,
  p: 4,
};

const stybut = {
  // position: 'absolute' as 'absolute',
  // top: '10%',
  // left: '10%',
  zIndex: '9999',
};

export default function Legenddef() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={stybut} onClick={handleOpen}>Déforestation le long de l'axe routier Ishasha-Rutshuru - Légende</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <Typography>
              <b>Déforestation le long de l'axe routier Ishasha-Rutshuru</b><br />Empreinte de la déforestation par année, à partir de relevés d'images satellites (années 2001-2022) et d'alertes à la déforestation (janvier-mai 2023)<br /><br />
              <Divider />
            </Typography>
            <Typography>
              <div className='defgrad'></div>Pertes brutes de couvert forestier de 2001 à 2022 (jaune moins récent, rouge plus récent)<br /><br />
              <div className='defalert'></div>Alerte à la déforestation en 2023<br /><br /><br />
            </Typography>
            <Typography>
              Les arbres sont déﬁnis comme des végétaux d'une hauteur supérieure à 5 mètres. La « perte de couverture forestière » est déﬁnie comme une perturbation qui remplace un peuplement ou un passage d'un état forestier à un état non forestier. L'alerte à la déforestation est émise lorsqu’une zone de 30 mètres carrés a subi une perturbation dans le couvert forestier, ce qui indique que des arbres dans cette zone ont été coupés.<br /><br />Source: Hansen/UMD/Google/USGS/NASA, Hansen, Matthew C., Alexander Krylov, Alexandra Tyukavina, Peter V. Potapov, Svetlana Turubanova, Bryan Zutta, Suspense Ifo, Belinda Margono, Fred Stolle, and Rebecca Moore. “Humid Tropical Forest Disturbance Alerts Using Landsat Data.” Environmental Research Letters 11, no. 3 (2016): 034008
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
