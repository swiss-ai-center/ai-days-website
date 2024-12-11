import {
    List,
    Paper,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Card,
    CardMedia,
    CardActionArea
} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Footer from "../../components/Footer/footer";
import './styles.css';

const Partners: React.FC = () => {
    const {t} = useTranslation();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    /*
        const platineVisibilityAndPresence: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.visibility-and-presence`, {returnObjects: true});
        const platineMarketingAndCommunication: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.marketing-and-communication`, {returnObjects: true});

        const goldVisibilityAndPresence: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.visibility-and-presence`, {returnObjects: true});
        const goldMarketingAndCommunication: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.marketing-and-communication`, {returnObjects: true});

        const silverVisibilityAndPresence: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.visibility-and-presence`, {returnObjects: true});
        const silverMarketingAndCommunication: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.marketing-and-communication`, {returnObjects: true});
    */

    return (
        <Container maxWidth={"xl"}>
            <Box
                sx={{
                    backgroundImage: 'url("/partenaires.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 5,
                    borderRadius: 2,
                    boxShadow: 3,
                    position: 'relative',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
                }}
            >
                <Typography variant="h2"
                            sx={{color: '#fff', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>
                    {t(`years.${selectedYearIndex(year)}.partners.title`)}
                </Typography>
                <Box
                    component="img"
                    src="hes-so.png"
                    alt="HES-SO Logo"
                    sx={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '120px',
                        opacity: 0.7
                    }}
                />
            </Box>

            <Paper elevation={2} sx={{p: 4, borderRadius: 3, boxShadow: 2}}>

                {/* Introduction */}
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}} p={2}>
                    <Typography variant={"body1"} py={1}>
                        {t(`years.${selectedYearIndex(year)}.partners.introduction`)}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}} p={2}>
                    <Typography variant={"body1"} py={1}>
                        {t(`years.${selectedYearIndex(year)}.partners.contact`)}
                    </Typography>
                </Box>

                <Divider variant={"middle"} sx={{pt: 2}}/>

                {/* Partenaire Platine */}
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2, pt: 4}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.title`)}
                    </Typography>
                </Box>

                {/* Logos Partenaire Platine */}
                <div className={"partner-img"}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, py: 4}}>
                        <Card sx={{border: '1px solid lightgrey'}} elevation={0}>
                            <CardActionArea onClick={
                                () => window.open(t(`years.${selectedYearIndex(year)}.footer.partner-1`), "_blank")
                            }>
                                <CardMedia
                                    component="img"
                                    height="200px"
                                    image="/mobiliere.png"
                                    alt="La Mobilière Logo"
                                />
                            </CardActionArea>
                        </Card>
                        <Card sx={{border: '1px solid lightgrey'}} elevation={0}>
                            <CardActionArea onClick={
                                () => window.open(t(`years.${selectedYearIndex(year)}.footer.partner-2`), "_blank")
                            }>
                                <CardMedia
                                    component="img"
                                    height="200px"
                                    image="/ehl-logo.png"
                                    alt="EHL Hospitality Business School Logo"
                                />
                            </CardActionArea>
                        </Card>
                        <Card sx={{border: '1px solid lightgrey'}} elevation={0}>
                            <CardActionArea onClick={
                                () => window.open(t(`years.${selectedYearIndex(year)}.footer.partner-3`), "_blank")
                            }>
                                <CardMedia
                                    component="img"
                                    height="200px"
                                    image="/hes-so.png"
                                    alt="HES-SO Logo"
                                />
                            </CardActionArea>
                        </Card>
                    </Box>
                </div>
                {/*<Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"body1"} py={1}>
                        {t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.description`)}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.visibility-and-presence`)}
                    </Typography>
                    <List>
                        {platineVisibilityAndPresence.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon><ExpandCircleDownRoundedIcon color="primary"
                                                                           sx={{transform: 'rotate(-90deg)'}}/></ListItemIcon>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.marketing-and-communication`)}
                    </Typography>
                    <List>
                        {platineMarketingAndCommunication.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon><ExpandCircleDownRoundedIcon color="primary"
                                                                           sx={{transform: 'rotate(-90deg)'}}/></ListItemIcon>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>
*/}
                {/* Partenaire Or */}
                <div className={"partner-img"}>
                    <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2, pt: 4}}>
                        <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                            {t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.title`)}
                        </Typography>
                    </Box>

                    {/* Logos Partenaire Or */}
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, py: 4}}>
                        <Card sx={{border: '1px solid lightgrey'}} elevation={0}>
                            <CardActionArea onClick={
                                () => window.open("https://alpict.ch/", "_blank")
                            }>
                                <CardMedia
                                    sx={{p: 2}}
                                    component="img"
                                    height="200px"
                                    image="/alp_ict.png"
                                    alt="ALP ICT Logo"
                                />
                            </CardActionArea>
                        </Card>

                        <Card sx={{border: '1px solid lightgrey'}} elevation={0}>
                            <CardActionArea onClick={
                                () => window.open("https://icosys.ch/", "_blank")
                            }>
                                <CardMedia
                                    sx={{p: 2}}
                                    component="img"
                                    height="200px"
                                    image="/icosys-logo.png"
                                    alt="ALP ICT Logo"
                                />
                            </CardActionArea>
                        </Card>
                    </Box>
                </div>
                {/* <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"body1"} py={1}>
                        {t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.description`)}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.visibility-and-presence`)}
                    </Typography>
                    <List>
                        {goldVisibilityAndPresence.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon><ExpandCircleDownRoundedIcon color="primary"
                                                                           sx={{transform: 'rotate(-90deg)'}}/></ListItemIcon>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.marketing-and-communication`)}
                    </Typography>
                    <List>
                        {goldMarketingAndCommunication.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon><ExpandCircleDownRoundedIcon color="primary"
                                                                           sx={{transform: 'rotate(-90deg)'}}/></ListItemIcon>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>*/}

                {/*  Partenaire Argent
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2, pt: 4}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.title`)}
                    </Typography>
                </Box>*/}

                {/* <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"body1"} py={1}>
                        {t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.description`)}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.visibility-and-presence`)}
                    </Typography>
                    <List>
                        {silverVisibilityAndPresence.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon><ExpandCircleDownRoundedIcon color="primary"
                                                                           sx={{transform: 'rotate(-90deg)'}}/></ListItemIcon>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.partners.marketing-and-communication`)}
                    </Typography>
                    <List>
                        {silverMarketingAndCommunication.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon><ExpandCircleDownRoundedIcon color="primary"
                                                                           sx={{transform: 'rotate(-90deg)'}}/></ListItemIcon>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>*/}

                {/* Partenaire presse */}
                <div className={"partner-img"}>
                    <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2, pt: 4}}>
                        <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                            {t(`years.${selectedYearIndex(year)}.partners.partnerships.press`)}
                        </Typography>
                    </Box>

                    {/* Logos Partenaire Presse */}
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, py: 4}}>
                        <Card elevation={0} sx={{border: '1px solid lightgrey'}}>
                            <CardActionArea onClick={
                                () => window.open("https://www.swissdevjobs.ch/", "_blank")
                            }>
                                <CardMedia
                                    sx={{p: 1}}
                                    component="img"
                                    height="200px"
                                    image="/swissdevjobs.png"
                                    alt="SwissDevJobs Logo"
                                />
                            </CardActionArea>
                        </Card>

                        <Card elevation={0} sx={{border: '1px solid lightgrey'}}>
                            <CardActionArea onClick={
                                () => window.open("https://www.arcinfo.ch/", "_blank")
                            }>
                                <CardMedia
                                    sx={{p: 1}}
                                    component="img"
                                    height="100px"
                                    image="/arcinfo-logo.png"
                                    alt="Arcinfo Logo"
                                />
                            </CardActionArea>
                        </Card>
                    </Box>
                </div>
            </Paper>

            {/* Footer */}
            <Footer/>
        </Container>
    );
};

export default Partners;
