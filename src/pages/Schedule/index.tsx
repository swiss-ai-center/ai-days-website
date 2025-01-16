import React from 'react';
import Footer from 'components/Footer/footer';
import {
    Container,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Divider,
    Button,
} from '@mui/material';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// Interfaces
interface DaySchedule {
    date: string;
    location: string;
    "planning-pic": string[];
}

interface YearData {
    year: string;
    schedule: {
        herotitle: string;
        days: DaySchedule[];
        pdfLink: string; // Global PDF link for the schedule
    };
}

const Schedule: React.FC = () => {
    const { t } = useTranslation();

    // Récupération de l'année sélectionnée dans le store Redux
    const year = useSelector((state: any) => state.year.value);
    const years: YearData[] = t("years", { returnObjects: true });

    // Fonction pour trouver l'index de l'année sélectionnée
    const selectedYearIndex = (yearToFind: string) => {
        const index = years.findIndex((yearObj) => yearObj.year === yearToFind);
        return index !== -1 ? index : 0;
    };

    const selectedYear = selectedYearIndex(year);

    // Récupération des informations dynamiques
    const heroTitle = t(`years.${selectedYear}.schedule.herotitle`);
    const schedule = t(`years.${selectedYear}.schedule.days`, {
        returnObjects: true,
    }) as DaySchedule[];
    const pdfLink = t(`years.${selectedYear}.schedule.pdfLink`);

    return (
        <Container maxWidth="xl">
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url("/hero-image.jpg")',
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
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                    {heroTitle}
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

            {/* Download Button */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    href={pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Télécharger le programme complet
                </Button>
            </Box>

            {/* Schedule Cards */}
            {schedule.map((day, index) => (
                <Box
                    key={index}
                    sx={{
                        mb: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Card
                        sx={{
                            width: '100%',
                            padding: '20px',
                            boxShadow: 4,
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', padding: '20px 40px' }}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', my: 1 }}>
                                {day.date}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {day.location}
                            </Typography>
                        </CardContent>

                        {/* Loop through planning-pic array */}
                        {day["planning-pic"].map((pic, imgIndex) => (
                            <CardMedia
                                key={imgIndex}
                                component="img"
                                image={pic}
                                alt={`Schedule for ${day.date}`}
                                sx={{
                                    objectFit: 'contain',
                                    padding:5,
                                    mb: imgIndex < day["planning-pic"].length - 1 ? 2 : 0,
                                }}
                            />
                        ))}
                    </Card>

                    {index < schedule.length - 1 && (
                        <Divider
                            variant="fullWidth"
                            sx={{
                                width: '100%',
                                height: '6px',
                                borderRadius: '3px',
                                backgroundColor: 'primary.main',
                                mt: 4,
                            }}
                        />
                    )}
                </Box>
            ))}

            <Footer />
        </Container>
    );
};

export default Schedule;