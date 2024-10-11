import {
    ApartmentRounded,
    GavelRounded,
    Groups3Rounded,
    InterestsRounded,
    PaymentsRounded,
    PersonRounded,
    ViewTimelineRounded
} from '@mui/icons-material';
import {
    List,
    Paper,
    Collapse,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Card,
    CardMedia,
    CardContent,
    Button
} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Footer from "../../components/Footer/footer";

const Contact: React.FC = () => {
    const {t} = useTranslation();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const members: {
        role: string,
        icon: string,
        members: string[]
    }[] = t(`years.${selectedYearIndex(year)}.contact.members`, {returnObjects: true});

    const events: {
        title: string,
        date: string,
        address: string,
        googleMapsLink: string // Ajout du lien vers Google Maps pour chaque événement
    }[] = t(`years.${selectedYearIndex(year)}.contact.venue`, {returnObjects: true});

    const icons: { [key: string]: any } = {
        GavelRounded: GavelRounded,
        PaymentsRounded: PaymentsRounded,
        ApartmentRounded: ApartmentRounded,
        ViewTimelineRounded: ViewTimelineRounded,
        InterestsRounded: InterestsRounded,
        Groups3Rounded: Groups3Rounded,
    };

    return (
        <Container maxWidth={"xl"}>
            <Box
                sx={{
                    backgroundImage: 'url("/contact-2.jpg")',
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
                    {t(`years.${selectedYearIndex(year)}.contact.title`)}
                </Typography>
                {/* HES-SO Logo in Bottom Right Corner */}
                <Box
                    component="img"
                    src="hes-so.png"
                    alt="HES-SO Logo"
                    sx={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '120px',
                        opacity: 0.7,
                    }}
                />
            </Box>

            {/* Events Locations */}
            <Paper elevation={2} sx={{p: 4, borderRadius: 3, boxShadow: 2}}>
                <Typography variant="h4" sx={{fontWeight: 'bold', mb: 4}}>
                    {t(`years.${selectedYearIndex(year)}.contact.venue-title`)}
                </Typography>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center'}}>
                    {/* Loop through events */}
                    {events.map((event, index) => (
                        <Card key={index} sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid darkgrey'
                        }} elevation={0}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={index === 0 ? "/pathe-image.jpg" : "/ehl-contact.jpg"} // Update image path based on index
                                alt={event.title}
                            />
                            <CardContent sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Box sx={{mb: 2}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.date}
                                        <br/>
                                        {event.address}
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 'auto'}}>
                                    <Button variant="contained" color="primary"
                                            href={`/PDF/${index === 0 ? 'pathe.pdf' : 'ehl.pdf'}`} target="_blank"
                                            disableElevation>
                                        {t(`years.${selectedYearIndex(year)}.contact.venue-cfa`)}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        href={event.googleMapsLink} // Lien vers Google Maps pour le lieu
                                        target="_blank"
                                    >
                                        {t(`years.${selectedYearIndex(year)}.contact.venue-google-maps`)}
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Paper>

            {/* Contact Committee */}
            <Paper elevation={2} sx={{p: 4, borderRadius: 3, boxShadow: 2, mt: 5}}>
                <Box sx={{display: 'flex', flexDirection: 'column', p: 2}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.contact.contact_title`)}
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}}>
                    <List component={"nav"}>
                        {members.map((item, index) => (
                            <Box pb={2} key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {React.createElement(icons[item.icon], {color: "primary"})}
                                    </ListItemIcon>
                                    <ListItemText children={<Typography variant={"h5"}>{item.role}</Typography>}/>
                                </ListItemButton>
                                <Collapse in={true} timeout="auto" unmountOnExit sx={{pl: 4}}>
                                    <List component={"div"} disablePadding>
                                        {item.members.map((member, idx) => (
                                            <ListItemButton key={idx} sx={{pl: 2}}>
                                                <ListItemIcon>
                                                    <PersonRounded color={"secondary"}/>
                                                </ListItemIcon>
                                                <ListItemText primary={member}/>
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>
            </Paper>
            <Footer></Footer>
        </Container>
    );
};

export default Contact;
