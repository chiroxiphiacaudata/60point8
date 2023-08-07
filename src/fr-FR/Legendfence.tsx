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

export default function Legendfence() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={stybut} onClick={handleOpen}>Conservation-forteresse - Légende</Button>
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
              <b>Infrastructure créée pour renforcer les stratégies de conservation-forteresses et la militarisation des zones de conservation</b><br /><br /><br />
              <Divider />
            </Typography>
            <Typography>
              <div className='fencesolid'></div>Clôtures électriques déjà installées d'ici au printemps 2023<br /><br /><br />
              <div className='fencedashed'></div>Clôtures électriques en cours de projet ou de construction<br /><br /><br />
            </Typography>
            <Typography>
              <div className='fenceF'></div>Postes de patrouille utilisés par les éco-gardes du Parc National de Virunga<br /><br />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
