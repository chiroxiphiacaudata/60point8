import '../App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

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
import PlanteFig from './plante_fig';


const ENGB = () => {

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
    <><div className='boxheader'>
      <div className='logo'></div><br />
      <Button className="translation" component={Link} to="/fr-FR">FR</Button>
    </div>


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

          <FullpageSection className='drc' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>We, the Hutus, Nandes, Hundes, Tustis and Pygmées, the Earth defenders of the Bwisha chiefdom, denounce the forced loss of our biological resources, our cultural heritage and our food sovereignty in the north of the Rutshuru territory<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="The territory of Rutshuru is wedged between a low-altitude unit, the north of Bwisha, a river-lake plain where the Ishasha and Rutshuru rivers flow before emptying into Lake Edouard, and a high-altitude unit, the south of Bwisha, formed by volcanic massifs and plateaux."
                  action={action} />, the low river-lacustrine plain stretching up to the fisheries of Lake Edward<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='route' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>For this reason, our purpose is to expose the environmental crimes that are being perpetrated in our territory<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Because of security concerns about the documentation of environmental crimes, and considering that some earth defenders are forced to live in hiding and under constant threat of death, when crimes are specifically mentioned, they are done so anonymously."
                  action={action} />, focusing first on what is happening along the main road, about 60 km long, that leads from Rutshuru to Ishasha.</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '85vh',
          }}>
            <ReactPlayer  width='100%' height='100%' playing={true} muted={true} loop={true} controls url="https://www.alessandromusetta.com/geo/tiles/60point8/data/60point8_1.mp4" />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Defmap />
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Our people are coerced into compulsory community work, known locally as salongo <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Under the control of criminal armed groups such as the FDLR-FOCA and more recently, after the military attack in October 2022 led by the M23, under the control of the patriotic resistance fighters known as WAZALENDO. They control the forest and rural areas by dividing into small groups of 3 to 4 militiamen, supervising their exploration and exploitation. They comb the fields and villages looking for people to work in the forest, and when they have completely exhausted the natural resources of a given area, they turn it into plantation zones accessible only with a token for agricultural exploitation, valued at between 10,000 FC (USD 4) and 15,000 FC (USD 6) per square (50 metres) each season."
                  action={action} />, and employed as loggers and charcoal burners. Those who evade this obligation cannot access the resources they need for their livelihood, unless they pay high taxes, or worse, are killed<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Reports have emerged about the death or torture of young people in Kiseguro, Katwiguru and Nyamilima between 2022 and 2023. The victims were people who had refused to take part in the salongo, or who had refused to transport freshly logged timber or charcoal (makala) to the towns, or who had attempted to farm without a farming permit token. "
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='routedef' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Hundreds of hectares of our broad-leaved rainforest have been destroyed over the last 20 years, but the peak of tree cover loss dates back to the last five years (2018) and has particularly affected the areas around Kiwanja-Rutshuru (450 ha), Katwiguru (440 ha), Kiseguru (320 ha), Nyamalima (230 ha) and Kinyandoni (200 ha).<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="The tree cover loss is calculated on the basis of a 5 km radius around the locations listed below. Kiwanja-Rutshuru 450 ha, Katwiguru 440 ha, Kiseguru 320 ha, Nyamilima 230 ha, Kinyandoni 200 ha. The analysis is carried out using Hansen/UMD/Google/USGS/NASA data for the period 2001-2022. The tree cover loss according to Hansen/UMD/Google/USGS/NASA is not necessarily entirely attributable to anthropogenic causes, though it should be considered indistinguishable from natural disturbances."
                  action={action} /><br /><br /></Typography>
            </CardContent>
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
            <PlanteFig />
          </FullpageSection>

          <FullpageSection className='msa' style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>The consequences of the alteration to the ecosystems resulting from such destruction are already measurable. Extreme rainfall is becoming more frequent, followed by unprecedented droughts. Our people are being forced to migrate to areas where they gain greater food security. The range of suitable habitats for flora and fauna is shrinking, threatening the extinction of certain species<Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Variation in projected biodiversity change in North Kivu province, using the mean species abundance (MSA) metric for the period 2015-2050 and considering the shared socio-economic pathway SSP5 RCP8.5 - a future with continued global dependence on fossil fuels. The GLOBIO model applied not only quantifies the potential effects of climate change, but also takes into account land use, habitat fragmentation and nitrogen pollution. In this case, the calculations refer only to the MSA of terrestrial plants. Blue areas indicate a recovery in the biodiversity of terrestrial plants, red areas a loss. It can be seen that in a dramatic scenario of biodiversity loss in primary and secondary forest areas in the Congo Basin (up to -0.80), the northern part of Rutshuru territory may experience an improvement in MSA by 2050 (+0.26) despite the unfavourable SSP5 RCP8.5 scenario, depending on recognition of the ecological function of the areas around the boundaries of Virunga Park and a reduction in land demand for other uses."
                  action={action} /><br /><br /></Typography>
            </CardContent>
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>While our people are forced to be charcoal burners, producing makala (charcoal), the armed groups are smuggling it to the major towns, particularly Goma, the provincial capital <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="A fraction of makala's production is destined for the local consumption. Most is transported to Goma and other urban centers in the North Kivu province. Ishasha, Nyamilima and Rutshuru are the main towns where makala traders deal and trade with armed groups, organizing transport along the main roads."
                  action={action} />, with the complicity of certain local businessmen and chiefs<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='blockimage' style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Blockmap />
          </FullpageSection>

          <FullpageSection className='routemakala' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>But the traffic of makala is not the sole one being criminally controlled. Access to all natural resources is taxed, by means of illegal roadblocks, both along the Rutshuru-Ishasha axis as well as on the roads leading to the gardens and forest <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="From Rutshuru to Ishasha, armed groups including FDLR-FOCA and Wazalendo, as well as RUD-Uranana, Nyatura FPPH, Amka Jeshi AFRC, and Mai Mai Jackson MFP in isolated areas, have raised various barriers. Some, charge for simple passage. Motorcyclists have to pay between 500 FC (0.20 USD) and 2000 FC (0.80 USD), while vehicles have to pay up to 120,000 FC (50 USD). Others, are intended to tax traffic, access or the extraction of exploited natural resources. Blocks are raised when combatants are not engaged in armed conflict."
                  action={action} /><br /><br /></Typography>
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
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>By destroying the forest, we increase the chance of encounters with wildlife. Conservationists from the Global North blame hunting for the extinction of forest-living species, but it's the illegal wildlife trade that's responsible for the decimation of the animals we cohabit with <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="We have recorded the slaughter of 'high-value specimens' as part of the illegal wildlife trade, such as elephants (the latest report dates from June 2022 and concerns the area around Nyamilima). The ivory is smuggled into villages along the Rutshuru-Ishasha axis, then transited via Ishasha on motorcycles, cut up and concealed in crates of agricultural produce or makala, for example, before being transported by bus to Entebbe airport, in the hands of Ugandan agents. Another illegal wildlife trade route leads to Goma and then Rwanda. The meat, on the other hand, is sold by militiamen to traders for local markets. "
                  action={action} /><br /><br /></Typography>
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>However, ecosystem degradation and food insecurity are exposing us to a growing risk of zoonotic disease transmission. The risk of an Ebola epidemic is high, and there is evidence that this has already happened here in recent years <Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="The map shows the spatial distribution of the Ebola virus zoonotic niche. It measures the suitability of the environment for its occurrence. Areas in red are those with the highest environmental suitability. Pigott DM, Golding N, Mylne A, Huang Z, Henry AJ, Weiss DJ, Brady OJ, Kraemer MU, Smith DL, Moyes CL, Bhatt S, Gething PW, Horby PW, Bogoch II, Brownstein JS, Mekaru SR, Tatem AJ, Khan K, Hay SI. Mapping the zoonotic niche of Ebola virus disease in Africa. Elife. 2014 Sep 8;3:e04395. doi: 10.7554/eLife.04395. PMID: 25201877; PMCID: PMC4166725."
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
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>The Westerners' short and simple solution was to design and build an electric fence. The Institut Congolais pour la Conservation de la Nature led the process of demarcating the forest under conservation status, promising the participation of local communities. A process that does not satisfy us and for which we do not feel listened to <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="According to the findings of a study conducted by the commission charged with verifying the demarcation of the park's boundaries, undertaken by the Université Chrétienne Bilingue du Congo with Monusco's stabilization unit and presented on August 18, 2022, the current boundaries of Virunga Park as presented by ICCN are legal. Suggestions made by the population, pointing to old roads and rivers, have not been taken into consideration. On the contrary, the boundaries traced indiscriminately on maps by the Belgians in 1925, have been respected. As in the past, we were not consulted."
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Fencemap />
          </FullpageSection>

          <FullpageSection className='routefence' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>This barrier breaks our physical and spiritual link with the forest and its waters. It forces us to abandon the land on which our ancestors' burial sites lie, to abandon our traditional livelihoods, and to migrate to cities and centers for the displaced </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='flee' style={{
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' sx={{ mt: 1, fontSize: 9, fontFamily: 'IBM Plex Mono' }}>Esdras Tsongo</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='armed' style={{
            backgroundColor: 'rgba(221, 229, 217, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>We are exhausted from conflicts, which are not about the exploitation of natural resources, i.e. the economic mechanism to perpetuate conflicts, but are rather fueled by the struggle for power and influence, such as access to land, citizenship and identity<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="FDLR-FOCA (In the early 2000s, the FDLR reached the height of its military and economic power, but began to suffer defections, with the RUD-Urunana and FDLR-Soki splitting up. In 2020, the group was led by Omega and Gaby Ruhinda and benefited from the NDC-R split, slowly re-establishing itself in the Bwito and Bwisha region with the help of its main ally, the CMC).  RUD-Urunana (The RUD-Urunana is a dissident faction of the FDLR-FOCA that emerged in 2007 following a leadership dispute over the distribution of funds. It has been active in the northern parts of the Bwisha and Bwito chiefdoms in Rutshuru territory. Although the RUD's military influence has gradually diminished in recent years, the group is said to have collaborated with various armed groups, including the FDLR-FOCA and Congolese Hutu militias). Nyatura FPPH (The term Nyatura, which means 'those who strike hard' in Kinyarwanda, emerged in association with armed mobilization in the Congolese Hutu community around 2011. The FFPH are made up of remnants of former Nyatura groups and the former FDLR branch led by Soki and Kasongo until around 2016. Operating mainly in Binza and Rutshuru, the FPP-H are involved in kidnapping and taxing). Amka Jeshi (Amka Jeshi emerged in May 2020 from a group of Nande youth based in Kiwanja and led by Kasereka Celestin. It claims to defend the Nande in northern Rutshuru against the FDLR and Nyatura, and cooperates with the FARDC by organizing patrols around Kiwanja). AFRC (Charles Bokande became a major armed player in the northern Rutshuru territory in 2014, benefiting from support and recruits from the Nande community. Charles has developed effective extortion networks along the southern shore of Lake Edward, taxing lucrative fishing camps. His influence extended to Nyamilima and the Ishasha border post with Uganda. Under Charles, the group is also known as Alliance des forces armées de résistants patriotes Mai-Mai [AFARPM]. While Charles claims to protect the Nande population of Rutshuru from Rwandophone armed groups, the FARDC and Virunga National Park rangers, the group has also frequently engaged in kidnapping and illegal cross-border trade). Mai-Mai Jackson MFP (In 2020, Jackson Muhukambuto, a long-standing rebel and former FARDC commander, created a new militia in northern Rutshuru and southern Lubero. Having joined and left the army on several occasions, Jackson has strong networks within the army and among armed Nande entrepreneurs)."
                  action={action} /><Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="List of armed groups: Mai-Mai Jackson MFP (MM J), AFRC (AFRC), RUD-Urunana (RUD-U), Nyatura FPPH (N FPPH), Amka Jeshi (AJ), Nyatura FPDH (N FPDH), FDLR-FOCA (FDLR), Nyatura CMC (N CMC), Nyatura Turarambiwe / Rutshuru (N TUR), M23 (M23), Nyatura Jean-Marie (N JM), APCLS (APCLS), Nyatura-APRDC (N APRDC), Nyatura Nyatura Musheku (N NM), Nyatura Bagaruza (N B), Nyatura GAV (N GAV), Nyatura Delta FDDH (N D-FDDH), MAC, ex-Guides (MAC),  Nyatura Delta FDDH (NDC R/B), NDC-R/Guidon (NDC R/G), Mai-Mai Kabidon FPP/AP (MM K). Source presence and distribution of armed groups (2021): Kivu Security Barometer (KST)"
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='women' style={{
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' sx={{ mt: 1, fontSize: 9, fontFamily: 'IBM Plex Mono' }}></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='conclusion' style={{
            height: '90vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>And we, the women, suffer most from the lack of access to forest resources, from the degradation of ecosystems, from the effects of the oppressive system of conflicts. We are robbed, raped and killed while looking for water and food, wood for shelter, cooking and heating. We often have to travel for hours at night to find a water fountain hoping not to cross paths with rapists and murderers, while we witness the destruction of the forest around us</Typography>
            </CardContent>
          </FullpageSection>


          <FullpageSection className='footer' style={{
            height: '80vh',
            padding: '1em',
            borderTop: '1px solid rgba(114, 114, 114, 0.5)'
          }}>
            <CardContent className='cc'>
              <Typography component='div' className="footert" sx={{ mt: 2, color: "rgba(251, 90, 80, 1) !important" }}><div className='logofooter'></div>Heartfelt thanks to all the earth defenders of the Bwisha chiefdom, for the humanity, courage, dedication, compassion and collective care they have brought to the realization of this document. For lasting peace, in solidarity.<br /><br /><br />
              </Typography>
              <Typography component='div' className="footert" sx={{ mt: 2 }}> <div className='license'></div><br /><br /><br />
              </Typography>
            </CardContent>
          </FullpageSection>


        </FullPageSections>

      </Fullpage></>
  )
}


export default ENGB;