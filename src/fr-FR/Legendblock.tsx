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

export default function Legendblock() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={stybut} onClick={handleOpen}>Taxation des ressources naturelles - Légende</Button>
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
              <b>Taxation du circuit des makala et des ressources naturelles le long de l'axe routier Ishasha-Rutshuru</b><br /><br /><br />
              <Divider />
            </Typography>
            <Typography>
              <div className='blockalert'></div>Flux du commerce illégal des ressources naturelles, de produits forestiers et des makala (charbon de bois)<br /><br /><br />
            </Typography>
            <Typography>
            <b>Barrières routières physiques et virtuelles</b><br /><br />
            <div className='blockW'></div>Barrières routières documentées depuis 2023 et contrôlées par les Wazalendo. Principalement destiné à la taxation du passage et au recrutement de locaux pour le salongo, le Wazalendo taxe également l'accès aux ressources naturelles et l'évacuation des ressources exploitées.<br /><br />
            <div className='blockN'></div>Barrières routières documentées depuis 2017 assurent la taxation de toutes les ressources naturelles, réglemente l'accès aux ressources et l'évacuation des ressources exploitées<br /><br />
            <div className='blockF'></div>Barrières routières documentées depuis 2017 et contrôlées par des groupes armés (FARDC, FDLR,  Nyatura FPPH). Ces barrières assurent la taxation des makala et des planches en contrôlant les bûcherons, les charbonniers et les vendeurs de charbon<br /><br />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
