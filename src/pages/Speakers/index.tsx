import React from 'react';
import {Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Footer from "../../components/Footer/footer";

interface Speaker {
    name: string;
    bio: string;
    title?: string;
    photo: string;
    para?: string; // Ajout de la propriété para
}

interface InvitedSpeakers {
    sectionTitle: string;
    speakers: Speaker[];
}

const Speakers: React.FC = () => {
    const {t} = useTranslation();

    // Récupération de l'année sélectionnée dans le store Redux
    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});

    // Fonction pour trouver l'index de l'année sélectionnée
    const selectedYearIndex = (yearToFind: string) => {
        const index = years.findIndex((yearObj) => yearObj.year === yearToFind);
        return index !== -1 ? index : 0;
    };

    // Récupération des informations dynamiques
    const selectedYear = selectedYearIndex(year);
    const heroTitle = t(`years.${selectedYear}.speakers.hero.title`);
    const invitedSpeakersData = t(`years.${selectedYear}.speakers.invitedSpeakers`, {returnObjects: true}) as InvitedSpeakers;
    const panelists = t(`years.${selectedYear}.speakers.moderatorsAndPanelists.panelists`, {returnObjects: true}) as Array<any> || [];
    const panelistsTitle = t(`years.${selectedYear}.speakers.moderatorsAndPanelists.sectionTitle`);

    return (
        <Container maxWidth="xl">
            {/* Hero Section */}
            <Paper
                sx={{
                    backgroundImage: 'url("/hero-image.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    mb: 5,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
                elevation={0}
            >
                <Typography variant="h2" sx={{fontWeight: 'bold', textAlign: 'center'}}>
                    {heroTitle}
                </Typography>
            </Paper>

            {/* Invited Speakers Section */}
            {invitedSpeakersData && invitedSpeakersData.speakers ? (
                <Box sx={{mb: 5}}>
                    <Typography variant="h4" sx={{fontWeight: 'bold', mb: 3}}>
                        {invitedSpeakersData.sectionTitle}
                    </Typography>
                    <Grid container spacing={4}>
                        {invitedSpeakersData.speakers.map((speaker, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card className="speaker-card">
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={speaker.photo}
                                        alt={speaker.name}
                                        sx={{borderRadius: 1}}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {speaker.name}
                                        </Typography>
                                        {speaker.title && (
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {speaker.title}
                                            </Typography>
                                        )}
                                        <Typography variant="body2" color="text.secondary" mt={1}>
                                            {speaker.bio}
                                        </Typography>
                                        {speaker.para && ( // Affichage de la description supplémentaire
                                            <Typography variant="body2" color="text.secondary" mt={1}>
                                                {speaker.para}
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ) : (
                <Typography variant="h6" color="text.secondary" align="center">
                    Aucun intervenant invité pour cette année.
                </Typography>
            )}

            {/* Moderators and Panelists Section */}
            <Box sx={{mb: 5}}>
                <Typography variant="h4" sx={{fontWeight: 'bold', mb: 3}}>
                    {panelistsTitle}
                </Typography>
                <Grid container spacing={4}>
                    {Array.isArray(panelists) && panelists.map((panelist, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index}>
                            <Card className="panelist-card">
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={panelist.photo}
                                    alt={panelist.name}
                                    sx={{borderRadius: 1}}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="text.secondary" align="center">
                                        {panelist.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        {panelist.position}
                                    </Typography>

                                    <Typography variant="caption" display="block" color="text.secondary" align="center"
                                                mt={1}>
                                        {panelist.bio}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Footer */}
            <Footer/>
        </Container>
    );
};

export default Speakers;
