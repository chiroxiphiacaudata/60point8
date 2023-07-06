import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import Basemap from './basemap';
import Defmap from './defmap';


const App = () => {

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
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <><div className='logo'></div>

      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Basemap />
          </FullpageSection>

          <FullpageSection style={{
            height: '45vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Le territoire de Rutshuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Defmap />
          </FullpageSection>

        </FullPageSections>

      </Fullpage></>
  )
}


export default App;