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
import PlanteFig from './plante_fig';


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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Nous, les Hutu, les Nande, les Hunde, les Tusti et les Pygmee, défenseurs et défenseures de la terre de la chéfferie de Bwisha, dénonçons la perte forcée de nos ressources biologiques, de notre patrimoine culturel et de notre souveraineté alimentaire dans le nord du territoire de Ruthuru<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Le territoire de Rutshuru est coincé entre une unité de basse altitude, le nord du Bwisha, une plaine fluvio-lacustre où coulent les rivières Ishasha et Rutshuru avant de se jeter dans le lac Edouard, et une unité de haute altitude, le sud du Bwisha, constituée de massifs et de plateaux d'origine volcanique."
                  action={action} />, la plaine fluviale-lacustre de basse altitude qui s'étend de la capitale de ce territoire jusqu'aux pêcheries du lac Édouard<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='route' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Pour cette raison, notre intention est d'exposer les crimes contre l'environnement qui sont perpétrés dans notre territoire<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="En raison des problèmes de sécurité liés à la documentation des crimes contre l'environnement, et compte tenu du fait que certains défenseurs et défenseures de la terre sont forcés de vivre dans la clandestinité et constamment menacés de mort, lorsque des crimes sont spécifiquement mentionnés, ils le sont de manière anonyme"
                  action={action} />, en commençant par ce qui se passe sur l'axe routier principal d'environ 60 km qui s'étend de Rutshuru à Ishasha</Typography>
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Notre peuple est contraint au travail communautaire obligatoire, connu sous le nom de SALONGO <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Sous le contrôle de groupes armés criminels, tels que les FDLR-FOCA et récemment, après l'invasion d'octobre 2022 par le M23, les résistants patriotes connus sous le nom de WAZALENDO. Ils contrôlent la forêt et les zones rurales en se divisant en petits groupes de 3 à 4 miliciens, supervisant leur exploration et leur exploitation. Ils ratissent les champs et les villages en cherchant des gens pour travailler dans la forêt, et lorsqu'ils ont complètement épuisé les ressources naturelles d'un secteur, ils les transforment en zones de plantation accessibles uniquement par un un jeton d’autorisation d’exploitation agricole, entre 10000 FC (4 USD) et 15000 FC (6 USD) par carré (50 mètres) à chaque saison."
                  action={action} />, et employé comme bûcheron et charbonnier. Ceux qui se soustraient à cette obligation ne peuvent accéder aux ressources nécessaires à leur subsistance, à moins de payer des taxes élevées, ou pire, d'être tués<Button onClick={handleClick}>ꔮ</Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="Il y a des rapports concernant la mort ou la torture de jeunes gens à Kiseguro, Katwiguru et Nyamilima entre 2022 et 2023. Il s'agit de personnes qui ont refusé de participer au Salongo, ou qui ont refusé de transporter vers les villes le bois récemment exploité ou le charbon de bois (Makala), ou qui ont tenté de cultiver sans jeton d’autorisation d’exploitation agricole. "
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

          <FullpageSection className='routedef' style={{
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Des centaines d'hectares de notre forêt tropicale humide à feuilles larges ont été détruits au cours des 20 dernières années, mais le pic de perte de couverture arborée remonte aux cinq dernières années (2018) et a particulièrement affecté les environs de Kiwanja-Rutshuru (450 ha), Katwiguru (440 ha), Kiseguru (320 ha), Nyamalima (230 ha) et Kinyandoni(200 ha)<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="En calculant un rayon de 5 km autour des lieux énumérés ci-dessous, la perte nette de couverture arborée est indiquée. Kiwanja-Rutshuru 450 ha, Katwiguru 440 ha, Kiseguru 320 ha, Nyamilima 230 ha, Kinyandoni 200 ha. L'analyse porte sur les données Hansen/UMD/Google/USGS/NASA pour les années 2001-2022. La perte du couvert arboré chez Hansen/UMD/Google/USGS/NASA n'est pas toujours entièrement imputable à des causes humaines, mais elle doit être considérée comme indiscernable des perturbations naturelles."
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Les effets de l'altération des écosystèmes résultant de cette destruction sont déjà mesurables. Les précipitations extrêmes sont de plus en plus fréquentes, suivies de sécheresses sans précédent. Nos peuples sont contraints de migrer vers des zones où ils gagnent en sécurité alimentaire. La zone d'adéquation de l'habitat pour la faune et la flore se réduit de plus en plus, menaçant l'extinction de certaines espèces<Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Variation du changement projeté de la biodiversité dans la province du Nord-Kivu, en utilisant la métrique de l'abondance moyenne des espèces (MSA) pour la période 2015-2050 et en considérant la trajectoire socio-économique partagée SSP5 RCP8.5 - un avenir avec une dépendance mondiale continue aux combustibles fossiles. Le modèle GLOBIO appliqué ne quantifie pas seulement les effets potentiels du changement climatique, mais tient également compte de l'utilisation des terres, de la fragmentation des habitats et de la pollution par l'azote. Dans ce cas, les calculs se réfèrent uniquement à la MSA des plantes terrestres. Les zones bleues indiquent une récupération de la biodiversité des plantes terrestres, les zones rouges une perte. On constate que dans un contexte désastreux de perte d'intégrité de la biodiversité terrestre des zones de forêts primaires et secondaires dans le Bassin du Congo (jusqu'à - 0,80), le nord du territoire de Rutshuru peut connaître en 2050 une amélioration de la MSA (+ 0,26) malgré le scénario peu favorable SSP5 RCP8.5, en fonction de la reconnaissance de la fonction écologique des zones autour des limites du Parc des Virunga et de la réduction de la demande en terres."
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Alors que notre peuple est contraint d'être charbonnier, en produisant du MAKALA (charbon de bois), les groupes armés en trafiquent vers les grandes villes, en particulier Goma, la capitale provinciale <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Une fraction de la production de Makala est destinée à la consommation locale de la population riveraine. La majeure est acheminée vers la ville de Goma et d'autres agglomérations urbaines de la province du Nord-Kivu. Ishasha, Nyamilima et Rutshuru sont les principaux chefs lieux où les négociants en makala trafiquent et commercent avec les groupes armés, organisant le transport sur les principaux axes routiers."
                  action={action} />, avec la complicité de certains hommes d'affaires locaux et de certains chefs locaux<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Mais le trafic de Makala n'est pas le seul à être contrôlé de manière criminelle. L'accès à toutes les ressources naturelles est taxé, en employant la stratégie des barrières routières illégales, tant sur l'axe Rutshuru-Ishasha que sur les chemins menant aux jardins <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="De Rutshuru à Ishasha, les groupes armés entre FDLR-FOCA et Wazalendo, mais aussi RUD-Uranana, Nyatura FPPH, Amka Jeshi AFRC, et Mai Mai Jackson MFP dans les zones isolées, ont érigé diverses barrières. Certains taxent le simple passage. Les motocyclistes doivent payer entre 500 FC (0,20 USD) et 2000 FC (0,80 USD), tandis que les véhicules doivent payer jusqu'à 120000 FC (50 USD). D'autres servent à taxer le trafic, l'accès ou l'évacuation des ressources naturelles exploitées. Les blocs sont érigés lorsque les combattants ne sont pas engagés dans le conflit armé."
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>En détruisant la forêt, nous augmentons nos rencontres avec la faune. Ils accusent notre chasse d'être la cause de l'extinction des espèces vivant dans les forêts, mais c'est le commerce illégal d'espèces sauvages qui est responsable de la décimation des animaux avec lesquels nous cohabitons<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="On a enregistré des abattages de spécimens de grande valeur dans le cadre du commerce illégal d'espèces sauvages, comme les éléphants (le dernier rapport date de juin 2022 et concerne les environs de Nyamilima). L'ivoire est introduit en contrebande dans les villages situés le long de l'axe Rutshuru-Ishasha, puis transite par Ishasha à moto, découpé et dissimulé dans des caisses de produits agricoles ou Makala par exemple, avant d'être acheminé par bus jusqu'à l'aéroport d'Entebbe, aux mains d'agents ougandais. Un autre itinéraire du commerce illégal d'espèces sauvages est celui qui mène à Goma, puis au Rwanda. La viande, par contre, est vendue par les miliciens à des commerçants destinés aux marchés locaux. "
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>La dégradation des écosystèmes et l'insécurité alimentaire nous exposent toutefois à un risque croissant de transmission de maladies zoonotiques. Le risque de voir surgir une épidémie d'Ebola est élevé et il existe des preuves que cela s'est déjà produit au cours des dernières années <Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="La carte montre la distribution spatiale de la niche zoonotique du virus Ebola. Elle mesure l'adéquation de l'environnement à son apparition. Les zones en rouge sont celles qui présentent la plus forte adéquation environnementale. Pigott DM, Golding N, Mylne A, Huang Z, Henry AJ, Weiss DJ, Brady OJ, Kraemer MU, Smith DL, Moyes CL, Bhatt S, Gething PW, Horby PW, Bogoch II, Brownstein JS, Mekaru SR, Tatem AJ, Khan K, Hay SI. Mapping the zoonotic niche of Ebola virus disease in Africa. Elife. 2014 Sep 8;3:e04395. doi: 10.7554/eLife.04395. PMID: 25201877; PMCID: PMC4166725."
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>La solution rapide et simple des Occidentaux a été de dessiner et de construire une clôture électrique. L'Institut Congolais pour la Conservation de la Nature a conduit le processus de démarcation de la forêt sous statut de conservation en promettant la participation des communautés locales. Un processus qui ne nous satisfait pas et pour lequel nous ne nous sentons pas écoutés <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Selon les conclusions d’une étude de la commission  chargée de vérifier la démarcation des limites de ce parc réalisée par l’Université Chrétienne Bilingue du Congo avec l’unité de stabilisation de la Monusco présentée le 18 août 2022, les limites actuelles du parc des Virunga telles que présentées par l’ICCN sont légales. Malgré ces conclusions, les habitants vivant au tour du parc trouvent plutôt des lois sur la délimitation ne sont pas réalistes par rapport à la situation actuelle car elles datent de la période coloniale. Les suggestions faites par la population, indiquant d'anciens chemins et rivières, n'ont pas été prises en considération. Au contraire, les délimitations tracées sans discernement sur les cartes dessinées par les Belges en 1925 et qui tombent en poussière dans les archives cartographiques ont été respectées. Tout comme à l'époque, nous n'avons pas été consultés."
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Cette barrière rompt notre lien physique et spirituel avec la forêt et ses eaux. Elle nous oblige à abandonner la terre sur laquelle se trouvent les tombes de nos ancêtres, à changer notre mode de vie, à migrer vers les villes et les centres pour personnes déplacées</Typography>
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Nous sommes exténués à force de fuir les conflits, qui ne portent pas sur les ressources naturelles, car ce sont eux qui les perpétuent, et qui sont plutôt alimentés par la lutte pour le pouvoir et l'influence, tels que l'accès à la terre, à la citoyenneté et à l'identité. Beaucoup d'entre nous n'ont jamais vécu en temps de paix<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="FDLR-FOCA (Au début des années 2000, les FDLR ont atteint l'apogée de leur puissance militaire et économique, mais elles ont commencé à subir des défections, le RUD-Urunana et les FDLR-Soki se séparant. En 2020, le groupe est dirigé par Omega et Gaby Ruhinda et bénéficie de la scission du NDC-R, se rétablissant lentement dans la région de Bwito et Bwisha avec l'aide de son principal allié, la CMC). RUD-Urunana (Le RUD-Urunana est une faction dissidente des FDLR-FOCA apparue en 2007 à la suite d'une querelle de leadership, qui aurait porté sur la distribution de fonds. Il a été actif dans les parties nord des chefferies de Bwisha et de Bwito dans le territoire de Rutshuru. Bien que l'influence militaire du RUD ait progressivement diminué ces dernières années, le groupe aurait collaboré avec différents groupes armés, y compris les FDLR-FOCA et les milices hutu congolaises). Nyatura FPPH (Le terme Nyatura, qui signifie 'ceux qui frappent fort' en kinyarwanda, est apparu en association avec la mobilisation armée dans la communauté hutu congolaise vers 2011. Les FFPH sont constituées de restes d'anciens groupes Nyatura et de l'ancienne branche des FDLR dirigée par Soki et Kasongo jusqu'à environ 2016. Opérant principalement à Binza, Rutshuru, les FPP-H se livrent à des enlèvements et à la taxation). Amka Jeshi (Amka Jeshi est apparu en mai 2020 à partir d'un groupe de jeunes Nande basé à Kiwanja et dirigé par Kasereka Celestin. Il prétend défendre les Nande dans le nord de Rutshuru contre les FDLR et les Nyatura et coopère avec les FARDC en organisant des patrouilles autour de Kiwanja). AFRC (Charles Bokande est devenu un acteur armé important dans le nord du territoire de Rutshuru en 2014, bénéficiant du soutien et des recrues de la communauté Nande. Charles a développé des réseaux d'extorsion efficaces le long de la rive sud du lac Édouard, taxant les camps de pêche lucratifs. Son influence s'est étendue à Nyamilima et au poste frontière d'Ishasha avec l'Ouganda. Sous Charles, le groupe est également connu sous le nom d'Alliance des forces armées de résistants patriotes Mai-Mai (AFARPM). Alors que Charles prétend protéger la population Nande de Rutshuru des groupes armés rwandophones, des FARDC et des gardes forestiers du parc national des Virunga, le groupe s'est aussi souvent livré à des enlèvements et à des échanges transfrontaliers illégaux). Mai-Mai Jackson MFP (En 2020, Jackson Muhukambuto, rebelle de longue date et ancien commandant des FARDC, a créé une nouvelle milice dans le nord de Rutshuru et le sud de Lubero. Ayant rejoint et quitté l'armée à plusieurs reprises, Jackson dispose de solides réseaux au sein de l'armée et parmi les entrepreneurs armés Nande)."
                  action={action} /><Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={25000}
                  onClose={handleCloseNote}
                  message="Liste des groupes armés: Mai-Mai Jackson MFP (MM J), AFRC (AFRC), RUD-Urunana (RUD-U), Nyatura FPPH (N FPPH), Amka Jeshi (AJ), Nyatura FPDH (N FPDH), FDLR-FOCA (FDLR), Nyatura CMC (N CMC), Nyatura Turarambiwe / Rutshuru (N TUR), M23 (M23), Nyatura Jean-Marie (N JM), APCLS (APCLS), Nyatura-APRDC (N APRDC), Nyatura Nyatura Musheku (N NM), Nyatura Bagaruza (N B), Nyatura GAV (N GAV), Nyatura Delta FDDH (N D-FDDH), MAC, ex-Guides (MAC),  Nyatura Delta FDDH (NDC R/B), NDC-R/Guidon (NDC R/G), Mai-Mai Kabidon FPP/AP (MM K). Source des données sur la présence et la répartition territoriale des groupes armés (2021): Baromètre sécuritaire du Kivu (KST)"
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
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Et c'est nous, les femmes, qui souffrons le plus du manque d'accès aux ressources forestières, de la dégradation des écosystèmes, des effets du système oppressif des conflits, étant volées, violées et tuées alors qu'elles cherchent de l'eau, du bois pour s'abriter, cuisiner et se chauffer, devant peut-être voyager des heures durant la nuit pour trouver une fontaine avec de l'eau alors que d'autres sont asséchées par le changement climatique et la dévastation de la forêt</Typography>
            </CardContent>
          </FullpageSection>


          <FullpageSection className='footer' style={{
            height: '80vh',
            padding: '1em',
            borderTop: '1px solid rgba(114, 114, 114, 0.5)'
          }}>
            <CardContent className='cc'>
              <Typography component='div' className="footert" sx={{ mt: 2, color: "rgba(251, 90, 80, 1) !important" }}><div className='logofooter'></div>Sincères remerciements à tous les défenseurs et défenseures de la terre de la chefferie de Bwisha, pour l'humanité, le courage, le dévouement, la compassion et les soins collectifs qu'ils ont apportés à la réalisation de ce document. Pour une paix durable, en toute solidarité.<br /><br /><br />
              </Typography>
            <Typography component='div' className="footert" sx={{ mt: 2 }}> <div className='license'></div><br /><br /><br />
            </Typography>
          </CardContent>
          </FullpageSection>


        </FullPageSections>

      </Fullpage></>
  )
}


export default App;