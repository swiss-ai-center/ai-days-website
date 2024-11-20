import React from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// Interfaces
interface DaySchedule {
    date: string;
    location: string;
    "planning-pic": string;
}

interface YearData {
    year: string;
    schedule: {
        herotitle: string;
        days: DaySchedule[];
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
                        width: '120px', // Adjust size as needed
                        opacity: 0.7, // Transparent effect
                    }}
                />
            </Box>

            {/* Schedule Cards */}
            {schedule.map((day, index) => (
                <Box
                    key={index}
                    sx={{
                        mb: 4,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Card
                        sx={{
                            width: '100%',
                            maxWidth: 800, // Uniforme pour toutes les cards
                            boxShadow: 3,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={day["planning-pic"]}
                            alt={`Schedule for ${day.date}`}
                            sx={{
                                objectFit: 'contain', // S'assure que l'image est totalement visible
                            }}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                {day.date}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {day.location}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Container>
    );
};

export default Schedule;