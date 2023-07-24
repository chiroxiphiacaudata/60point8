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

    function createData(plant, agro, edible, med, femme, rev) {
        return { plant, agro, edible, med, femme, rev };
    }

    const ancestr = [
        createData('Acacia mearnsii', 'Avec son taux de croissance rapide et sa capacité à fixer l\'azote atmosphérique, elle peut jouer un rôle important dans la restauration des forêts indigènes. Toutefois, en raison de sa tendance à envahir d\'autres habitats, elle ne devrait être utilisée de cette manière que dans sa zone d\'origine. L\'arbre pousse même sur des pentes avec des sols peu profonds ou pauvres en acide qui sont instables et ne supporteront pas les cultures agricoles. Il peut donc être très efficace pour prévenir l\'érosion des sols. Des plantations denses se sont avérées efficaces pour prévenir l\'érosion, même sur des pentes allant jusqu\'à 50 degrés.L\'arbre a également été planté comme brise-vent ou comme coupe-feu. Fixateur d\'azote efficace et bonne source d\'engrais vert, il peut ainsi restaurer et régénérer les sols. Le bois est utilisé pour les poteaux de maison, les poignées d\'outils, l\'ébénisterie, la menuiserie, les parquets, le bois de construction et le bois d\'allumette.', '( )', 'L\'écorce contient des quantités plus ou moins importantes de tanins et est astringente. Ils sont par exemple utilisés dans le traitement de la diarrhée et de la dysenterie, et peuvent également être utiles en cas d\'hémorragie interne. En application externe, souvent sous forme de bain, ils sont utilisés pour traiter les plaies et autres problèmes de peau, les hémorroïdes, la transpiration des pieds, certains problèmes oculaires, les bains de bouche, etc.', '(X)', '(X)'),
        createData('Calliandra calothyrsus', 'La plante peut être utilisée pour réhabiliter les zones sujettes à l\'érosion, telles que les pentes et les rives des cours d\'eau, et pour récupérer les terres épuisées par l\'agriculture, où elle domine facilement les mauvaises herbes indésirables. Elle est utilisée comme arbre nourricier pour les arbres à bois partiellement tolérants à l\'ombre. Fixent l\'azote atmosphérique, ont une production élevée de biomasse foliaire et de protéines foliaires sur des sols peu fertiles. Grâce à la litière et à la combinaison d\'un système d\'enracinement latéral profond et bien développé, le sol et la productivité de la terre sont améliorés. Il est compatible avec les cultures, avec des racines profondes et des racines fibreuses étendues. Elle s\'est révélée prometteuse en tant que plante de sous-bois dans les plantations où la transmission de la lumière est d\'environ 60 %. La plante convient aux limites des haies. Les fleurs constituent une riche source de nectar pour les abeilles. Le bois peut être utilisé pour de petits travaux de menuiserie, des manches d\'outils, des cadres, etc.  Les propriétés de la pâte et du papier sont satisfaisantes et adaptées à la fabrication de papier kraft. Le bois convient comme combustible de fumage pour la production de feuilles de caoutchouc fumées. ', '( )', '( )', '(X)', '(X)'),
        createData('Grevillea robusta', 'Excellente espèce agroforestière car elle interfère peu avec les cultures. Elle est considérée comme plus compatible avec les cultures des petites exploitations que la plupart des autres espèces d\'arbres. Les feuilles sont utilisées comme paillis. Le chêne soyeux fournit d\'abondantes quantités de paillis de feuilles, qui peuvent s\'accumuler jusqu\'à une profondeur de 30 à 40 cm. Cette couche épaisse protège le sol et maintient sa température. La plante produit de petites quantités de gomme-résine. Les feuilles donnent des teintures jaunes et vertes intenses. Le bois est utilisé pour le lambris, la menuiserie, l\'ébénisterie, etc. Il convient à la fabrication de pâte à papier. C\'est une plante très appréciée pour le bois de chauffage.', 'Fleurs et feuilles', '( )', '(X)', '(X)'),
        createData('Leucaena leucocephala', 'Il s\'agit d\'une plante à croissance rapide dotée d\'un système racinaire étendu et qui a été utilisée pour la récupération des terres, la prévention de l\'érosion des sols et comme plante d\'ombrage. Son système racinaire agressif aide à briser les couches compactes du sous-sol, améliorant la pénétration de l\'humidité dans le sol et diminuant le ruissellement de surface. Les feuilles finement divisées se décomposent rapidement, fournissant un apport rapide et à court terme de nutriments. L\'arbre a le potentiel de renouveler la fertilité du sol et pourrait être particulièrement important dans les cultures sur brûlis, car il réduit considérablement la période de jachère entre les cultures. Des colorants rouges, bruns et noirs sont extraits des gousses, des feuilles et de l\'écorce. Les graines séchées sont largement utilisées pour l\'ornementation. Il est facile à travailler pour une grande variété de travaux de menuiserie et sèche sans se fendre ni se fissurer. Le bois de sciage, les meubles et les parquets sont des utilisations de plus en plus populaires. Le bois est généralement réduit en pulpe pour sa fibre, utilisée pour fabriquer du papier. Le bois brûle régulièrement avec peu de fumée, peu d\'étincelles et produit moins de 1% de cendres.', 'Feuilles, graines, gousses et boutons floraux', 'Une décoction de la racine et de l\'écorce est abortive. Les gousses et les graines sont un bon tonique. Les graines grillées sont émollientes. Les graines ont un effet bénéfique et sont administrées le matin à jeun. Parfois utilisées fraîches, les graines torréfiées sont plus couramment prescrites sous forme de poudre ou de gâteaux sucrés dans le traitement de l\'ascaridiose. Les graines contiennent une huile grasse. Les feuilles donnent du tanin, de la quercitrine et des alcaloïdes.', '(X)', '( )'),
        createData('Albizia gummifera', 'L\'arbre est apprécié pour l\'ombre qu\'il apporte aux cultures, et il est également planté ou conservé pour la conservation et l\'amélioration des sols. Le bois est utilisé pour la construction légère, l\'ameublement, l\'ébénisterie et divers outils. Il convient également pour les parquets légers, la menuiserie, les garnitures intérieures, les panneaux, les charpentes, les boîtes, les caisses, les sculptures, les placages déroulés et tranchés, les contreplaqués, les panneaux durs et les panneaux de particules. Les grumes sont traditionnellement utilisées pour la construction de canoës. La pulpe de bois convient à la production de papier.', 'Gomme de l\'écorce', 'Une infusion de l\'écorce est utilisée pour traiter la malaria et pour accélérer la parturition. L\'écorce pilée est utilisée comme tabac à priser pour traiter les maux de tête. L\'écorce est appliquée en externe en guise de nettoyant corporel pour traiter des affections telles que la gale et le psoriasis. Les racines et les feuilles sont purgatives. Elles sont utilisées dans le traitement de la diarrhée et des troubles oculaires. Les racines sont trempées dans l\'eau pendant 10 minutes et le liquide est bu pour soulager la douleur causée par les entorses. Une décoction de feuilles est utilisée comme antitussif et pour traiter l\'asthme. Les feuilles sont appliquées en externe sur les plaies et les fractures. Un extrait des gousses écrasées est bu pour traiter les maux d\'estomac. ', '(X)', '( )'),
        createData('Erythrina abyssinica', 'Des plantes peuvent être cultivées pour former une "clôture vivante" à partir de matraques. L\'arbre est recommandé pour la conservation des sols, la lutte contre l\'érosion et l\'utilisation comme engrais vert. Les graines sont très appréciées localement pour la fabrication de bibelots et de colliers. L\'écorce est parfois utilisée comme teinture brune pour les textiles. Une teinture rouge est obtenue à partir de la sève. Le liège de l\'écorce est utilisé comme flotteur pour les filets de pêche. Le bois est couramment utilisé pour fabriquer des sculptures, des tabourets, des tambours, des mortiers, des ruches, des manches d\'outils, des freins et des flotteurs pour les filets de pêche, et parfois aussi pour la construction de maisons.', '( )', 'L\'écorce est utilisée pour traiter un large éventail d\'affections, notamment les morsures de serpent, le paludisme, les maladies sexuellement transmissibles telles que la syphilis et la gonorrhée, l\'amibiase, l\'éléphantiasis, la toux, les inflammations du foie, les maux d\'estomac, les coliques et la rougeole. La sève de l\'écorce est bue comme anthelminthique. En usage externe, l\'écorce grillée et pulvérisée est appliquée sur les brûlures, les ulcères et les gonflements. Le liquide issu de l\'écorce broyée des tiges vertes est utilisé pour soigner la conjonctivite. Les racines sont utilisées pour traiter les ulcères gastroduodénaux, l\'épilepsie, la malaria, la blennorragie et la schistosomiase. Les fleurs pilées sont utilisées pour traiter la dysenterie. Une macération de la fleur est bue comme abortif et appliquée en externe pour traiter les maux d\'oreille. Les feuilles sont appliquées en externe sur les plaies et les articulations douloureuses. Les extraits de fruits sont utilisés pour traiter l\'asthme et la méningite.', '(X)', '( )'),
        createData('Moringa oleifera', 'Les plantes peuvent être cultivées comme une haie informelle, offrant une protection contre le vent, de l\'ombre et un support pour les plantes grimpantes. Largement utilisé pour les clôtures vivantes et les haies dans de nombreuses régions. Convient à la plantation dans les allées de culture et dans les jardins potagers. Les graines réduites en poudre sont utilisées pour clarifier le jus de canne à sucre. Le tourteau résultant de l\'extraction de l\'huile peut également être utilisé pour la purification de l\'eau. L\'écorce, lorsqu\'elle est battue, produit une fibre utilisée pour fabriquer de petites cordes et des nattes. Le bois donne une teinture bleue. Le tourteau de presse qui reste après l\'extraction de l\'huile des graines peut être utilisé comme amendement du sol ou comme engrais. Les feuilles écrasées sont utilisées pour nettoyer les casseroles, les poêles et les murs. Le bois tendre et léger brûle sans fumée et constitue un bois de chauffage acceptable pour la cuisine.', 'Jeunes feuilles et pousses, jeunes plants tendres, fleurs, gousses, graines, racines', 'L\'arbre est une plante nutritive, diurétique, laxative, expectorante, qui augmente le flux de lait, contrôle les infections bactériennes et est rubéfiant lorsqu\'il est appliqué localement. Il contient un antibiotique puissant. Les racines et l\'écorce sont utilisées pour les problèmes cardiaques et circulatoires, comme tonique et contre l\'inflammation. L\'écorce est appétissante et digestive. L\'écorce et la gomme sont utilisées dans le traitement de la tuberculose et de la septicémie.', '( )', '(X)'),
        createData('Mangifera indica', 'Grâce à sa couronne en forme de parapluie, le manguier offre de l\'ombre aux personnes et à leur bétail ; il sert également de coupe-feu. Le manguier est cultivé pour son fruit. Le fruit vert est également utilisé pour aromatiser les plats de poisson et de viande, comme d\'autres fruits acides. Les jeunes feuilles sont cuisinées comme un légume. Les feuilles de manguier améliorent la fertilité du sol lorsqu\'elles sont utilisées comme paillis pour les cultures. Importante plante mellifère, sécrétant de grandes quantités de nectar.  Le bois est utilisé à de nombreuses fins, notamment pour la construction d\'intérieurs, les blocs de hachage de viande, les meubles, la menuiserie, les planchers, les boîtes, les caisses et la construction de bateaux. L\'écorce est à l\'origine d\'une teinture brun-jaune utilisée pour la soie.', 'Fruits et jeunes feuilles', 'Les feuilles calcinées et pulvérisées constituent un emplâtre pour éliminer les verrues et agissent également comme styptique. Les graines sont utilisées pour pour traiter les rhumes et les toux tenaces, les diarrhées obstinées et les hémorragies de la vésicule biliaire. L\'écorce est astringente, homéostatique et antirhumatismale. antirhumatismale.', '( )', '(X)'),
        createData('Carica papaya', 'Les jeunes feuilles sont utilisées comme paillis. Les feuilles séchées peuvent être battues dans de l\'eau pour former un substitut de savon. ', 'Fruits, graines, fleurs mâles, très jeunes feuilles', 'Une infusion du jeune fruit vert rempli de latex est utilisée comme vermifuge pour les enfants. Le jus du fruit est utilisé pour traiter le diabète et l\'hypertension. Le jus du fruit est utilisé pour dissoudre les verrues. Les feuilles et les fruits, en particulier les fruits non mûrs, sont pris en interne pour traiter une série de troubles digestifs, la diarrhée, l\'hypertension artérielle et les douleurs utérines. Les feuilles vertes sont cuites pour traiter le paludisme tertiaire et les troubles du transit intestinal chez les enfants. En externe, les feuilles sont appliquées sur les plaies comme un pansement qui aide à accélérer le processus de guérison. Le fruit mûr est un laxatif doux. L\'écorce interne est utilisée pour traiter les maux de dents. L\'écorce est utilisée pour traiter la diarrhée. La racine macérée est utilisée dans le traitement de la gonorrhée.', '( )', '(X)'),
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
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">LISTE DES ARBRES AVEC UNE DISCRÈTE CONNAISSANCE ANCESTRALE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper} sx={{ maxHeight: 300, overflow: 'auto' }}>
                        <Table sx={{ minWidth: 1000, fontSize: 13.5, fontWeight: "900 !important", }} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell>Nom et essence de l'arbre</TableCell>
                                    <TableCell align="center">Usage agroforestier</TableCell>
                                    <TableCell align="center">Usages comestibles</TableCell>
                                    <TableCell align="center">Usage médicinal</TableCell>
                                    <TableCell align="center">Connaissance et gestion par les femmes</TableCell>
                                    <TableCell align="center">Revenu</TableCell>
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
                                        <TableCell align="center">{row.agro}</TableCell>
                                        <TableCell align="center">{row.edible}</TableCell>
                                        <TableCell align="center">{row.med}</TableCell>
                                        <TableCell align="center">{row.femme}</TableCell>
                                        <TableCell align="center">{row.rev}</TableCell>
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
