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
import Blockmap from './blockmap';
import Endangered from './endangered';
import Fencemap from './fencemap';
import Plante from './plante';
import Plante_fig from './plante_fig';


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
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>L'existence et les subsistances des gens qui vivent le long des 60,8 kilomètres de l'axe routier Ishasha-Rutshuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                  action={action} />sont menacées tous les jours.<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='planches' style={{
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' sx={{ mt: 1, fontSize: 9, fontFamily: 'IBM Plex Mono' }}>Danny TORRES, Leopold RUTINIGIRWA, Anoumou KEMAVO, Thomas DUFOUR, Maxence RAGEADE</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>L'existence et les subsistances des gens qui vivent le long des 60,8 kilomètres de l'axe routier Ishasha-Rutshuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                  action={action} />sont menacées tous les jours.<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Defmap />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Plante />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Plante_fig />
          </FullpageSection>

          <FullpageSection className='makala' style={{
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' sx={{ mt: 1, fontSize: 9, fontFamily: 'IBM Plex Mono' }}>Danny TORRES, Leopold RUTINIGIRWA, Anoumou KEMAVO, Thomas DUFOUR, Maxence RAGEADE</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>L'existence et les subsistances des gens qui vivent le long des 60,8 kilomètres de l'axe routier Ishasha-Rutshuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                  action={action} />sont menacées tous les jours.<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Blockmap />
          </FullpageSection>

          <FullpageSection style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>L'existence et les subsistances des gens qui vivent le long des 60,8 kilomètres de l'axe routier Ishasha-Rutshuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                  action={action} />sont menacées tous les jours.<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='viande' style={{
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' sx={{ mt: 1, fontSize: 9, fontFamily: 'IBM Plex Mono' }}> Martin Harvey</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Endangered />
          </FullpageSection>

          <FullpageSection className='ebola' style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Text<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Our seeds fail even if the soils are fertile because we can no longer count with the frequency and intensity of rainfall. Periods of prolonged drought are affecting planting and crop yields. Severe drought, especially in the first season of 2019, affected farmers who planted oranges and mangoes, because it did not allow seedlings to establish properly in the field and they eventually dried out."
                  action={action} /><Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Since 2016, Lake Albert's water level has been rising steadily, and during the rainy season it floods a large number of fishing villages. The map shows the areas that have been flooded by water over the past five years. Lack of natural shore defences causes the lake to easily flood such flat areas."
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='fence' style={{
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' sx={{ mt: 1, fontSize: 9, fontFamily: 'IBM Plex Mono' }}></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Fencemap />
          </FullpageSection>

          <FullpageSection className='armed' style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Text<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Our seeds fail even if the soils are fertile because we can no longer count with the frequency and intensity of rainfall. Periods of prolonged drought are affecting planting and crop yields. Severe drought, especially in the first season of 2019, affected farmers who planted oranges and mangoes, because it did not allow seedlings to establish properly in the field and they eventually dried out."
                  action={action} /><Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Liste des groupes armés: Mai-Mai Jackson MFP (MM J), AFRC (AFRC), RUD-Urunana (RUD-U), Nyatura FPPH (N FPPH), Amka Jeshi (AJ), Nyatura FPDH (N FPDH), FDLR-FOCA (FDLR), Nyatura CMC (N CMC), Nyatura Turarambiwe / Rutshuru (N TUR), M23 (M23), Nyatura Jean-Marie (N JM), APCLS (APCLS), Nyatura-APRDC (N APRDC), Nyatura Nyatura Musheku (N NM), Nyatura Bagaruza (N B), Nyatura GAV (N GAV), Nyatura Delta FDDH (N D-FDDH), MAC, ex-Guides (MAC),  Nyatura Delta FDDH (NDC R/B), NDC-R/Guidon (NDC R/G), Mai-Mai Kabidon FPP/AP (MM K). Source des données sur la présence et la répartition territoriale des groupes armés (2021): Baromètre sécuritaire du Kivu (KST)"
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>



        </FullPageSections>

      </Fullpage></>
  )
}


export default App;