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
      <Button sx={stybut} onClick={handleOpen}>Deforestation along the Ishasha-Rutshuru road axis - Legend</Button>
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
              <b>Deforestation along the Ishasha-Rutshuru road axis</b><br />Deforestation footprint by year, based on satellite imagery (years 2001-2022) and deforestation alerts (January-May 2023)<br /><br />
              <Divider />
            </Typography>
            <Typography>
              <div className='defgrad'></div>Forest cover losses from 2001 to 2022 (yellow less recent, red more recent)<br /><br />
              <div className='defalert'></div>Deforestation alert in 2023<br /><br /><br />
            </Typography>
            <Typography>
            Trees are defined as vegetation taller than 5 meters. Forest cover loss is defined as a disturbance that replaces or changes a stand from a forested to a non-forested state. The deforestation alert indicates an area 30 meters by 30 meters that has suffered a disturbance in the forest cover, indicating that trees in this area may have been lost or removed.<br /><br />Source: Hansen/UMD/Google/USGS/NASA, Hansen, Matthew C., Alexander Krylov, Alexandra Tyukavina, Peter V. Potapov, Svetlana Turubanova, Bryan Zutta, Suspense Ifo, Belinda Margono, Fred Stolle, and Rebecca Moore. “Humid Tropical Forest Disturbance Alerts Using Landsat Data.” Environmental Research Letters 11, no. 3 (2016): 034008
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
