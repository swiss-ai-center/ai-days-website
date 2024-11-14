import {Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Card} from 'primereact/card';
import "./styles.css";
import Footer from "../../components/Footer/footer";
import parseHtml from "html-react-parser";

interface Workshop {
    title: string;
    description: string;
    schedule?: {
        time: string;
        equipment: string;
    };
    activities?: string[];
    topics?: string[];
    pdfLink?: string; // Lien vers le PDF détaillé de la session
}

const Workshops: React.FC = () => {
    const {t} = useTranslation();

    // Récupération de l'année sélectionnée dans le store Redux
    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});

    // Fonction pour trouver l'index de l'année sélectionnée
    const selectedYearIndex = (yearToFind: string) => {
        const index = years.findIndex((yearObj) => yearObj.year === yearToFind);
        return index !== -1 ? index : 0; // Retourne 0 si l'année n'est pas trouvée
    };

    // Récupération des workshops avec typage explicite
    const workshops: Workshop[] = t(`years.${selectedYearIndex(year)}.workshops.workshops`, {returnObjects: true}) as Workshop[] || [];

    return (
        <Container maxWidth={"xl"}>
            {/* Section de titre et lieu du workshop */}
            <Paper
                sx={{
                    backgroundImage: 'url("/pathe-image.jpg")',
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
                elevation={0}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: 2,
                    color: '#fff',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
                }}>
                    <Typography variant={"h2"} sx={{fontWeight: 'bold'}}>
                        {t(`years.${selectedYearIndex(year)}.workshops.title-27`) || "Workshop Title"}
                    </Typography>
                    <a className={"venue"} href="/contact">
                        <h3>{t(`years.${selectedYearIndex(year)}.workshops.venue-27`) || "Venue"}</h3>
                    </a>
                </Box>
                {/* HES-SO Logo in Bottom Right Corner */}
                <Box
                    component="img"
                    src="hes-so.png"
                    alt="HES-SO Logo"
                    sx={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '120px', // Adjust size as needed
                        opacity: 0.7, // Transparent effect
                    }}
                />
            </Paper>

            {/* Entête workshops */}
            <Box sx={{display: 'flex', flexDirection: 'column', p: 2}}>
                <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                    {t(`years.${selectedYearIndex(year)}.workshops.header.title`)}
                </Typography>
                <Typography variant={"body1"} pt={1}>
                    {parseHtml(t(`years.${selectedYearIndex(year)}.workshops.header.description`))}
                </Typography>
            </Box>

            {/* Affichage dynamique des workshops */}
            <div className={"div-cards"}>
                {workshops.length > 0 ? (
                    workshops.map((workshop: Workshop, index: number) => (
                        <Card key={index} title={workshop.title || t("no_title")} className={"card"}>
                            <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                                {t(`years.${selectedYearIndex(year)}.workshops.description-title`)}
                            </Typography>
                            <p>{workshop.description || t("no_description")}</p>

                            <Typography variant={"h6"} sx={{fontWeight: 'bold', mt: 2}}>
                                {t(`years.${selectedYearIndex(year)}.workshops.time-title`)}
                            </Typography>
                            <p>{workshop.schedule?.time || t("no_time")}</p>

                            <Typography variant={"h6"} sx={{fontWeight: 'bold', mt: 2}}>
                                {t(`years.${selectedYearIndex(year)}.workshops.equipment-title`)}
                            </Typography>
                            <p>{workshop.schedule?.equipment || t("no_equipment_needed")}</p>

                            <Typography variant={"h6"} sx={{fontWeight: 'bold', mt: 2}}>
                                {t(`years.${selectedYearIndex(year)}.workshops.activities-title`)}
                            </Typography>
                            {workshop.activities && workshop.activities.length > 0 && (
                                <ul>
                                    {workshop.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            )}

                            {/* Affichage conditionnel des topics */}
                            {workshop.topics && workshop.topics.length > 0 && (
                                <>
                                    <Typography variant={"h6"} sx={{fontWeight: 'bold', mt: 2}}>
                                        {t(`years.${selectedYearIndex(year)}.workshops.topics-title`)}
                                    </Typography>
                                    <ul>
                                        {workshop.topics.map((topic, i) => (
                                            <li key={i}>{topic}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* Bouton Voir PDF */}
                            {workshop.pdfLink && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={workshop.pdfLink}
                                    target="_blank"
                                    sx={{mt: 2}}
                                >
                                    {t(`years.${selectedYearIndex(year)}.workshops.workshop-cta`)}
                                </Button>
                            )}
                        </Card>
                    ))
                ) : (
                    <p>{t("no_workshops")}</p>
                )}
            </div>
            <Footer/>
        </Container>
    );
};

export default Workshops;
