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
      <Button sx={stybut} onClick={handleOpen}>Taxation of natural resources - Legend</Button>
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
              <b>Taxation of the makala and natural resources circuit along the Ishasha-Rutshuru road axis</b><br /><br /><br />
              <Divider />
            </Typography>
            <Typography>
              <div className='blockalert'></div>Illegal trade flows of natural resources, forest products and makala (charcoal)<br /><br /><br />
            </Typography>
            <Typography>
            <b>Physical and virtual roadblocks </b><br /><br />
            <div className='blockW'></div>Roadblocks  documented since 2023 and controlled by the Wazalendo. Mainly aimed at taxing passage and recruiting locals for Salongo, the Wazalendo also tax access to natural resources and the transportation of exploited resources<br /><br />
            <div className='blockN'></div>Roadblocks documented since 2017 ensure aiming at taxing of all natural resources, regulate access to resources and the transportation of exploited resources<br /><br />
            <div className='blockF'></div>Roadblocks documented since 2017 and controlled by armed groups (FARDC, FDLR, Nyatura FPPH). These roadblocks aimed at makala and planks taxing by controlling loggers, charcoal burners and charcoal sellers<br /><br />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
