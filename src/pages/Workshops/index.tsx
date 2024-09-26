import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import "./styles.css";
import { Button } from "primereact/button";

interface Workshop {
    title: string;
    description: string;
    schedule?: {
        time: string;
        equipment: string;
    };
    activities?: string[];
    topics?: string[];
}

const Workshops: React.FC = () => {
    const { t } = useTranslation();

    // Récupération de l'année sélectionnée dans le store Redux
    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", { returnObjects: true });

    // Fonction pour trouver l'index de l'année sélectionnée
    const selectedYearIndex = (yearToFind: string) => {
        const index = years.findIndex((yearObj) => yearObj.year === yearToFind);
        return index !== -1 ? index : 0; // Retourne 0 si l'année n'est pas trouvée
    };

    // Récupération des workshops avec typage explicite
    const workshops: Workshop[] = t(`years.${selectedYearIndex(year)}.workshops.workshops`, { returnObjects: true }) as Workshop[] || [];

    return (
        <Container maxWidth={"xl"}>
            {/* Section de titre et lieu du workshop */}
            <Paper sx={{ p: 2, my: 3, border: 2, borderRadius: 2, borderColor: 'lightgrey' }} elevation={0}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2 }}>
                    <Typography variant={"h2"} sx={{ fontWeight: 'bold' }}>
                        {t(`years.${selectedYearIndex(year)}.workshops.title-27`) || "Workshop Title"}
                    </Typography>
                    <h3>{t(`years.${selectedYearIndex(year)}.workshops.venue-27`) || "Venue"}</h3>
                    <h6>{t(`years.${selectedYearIndex(year)}.workshops.adress-27`) || "Address"}</h6>
                </Box>
            </Paper>

            {/* Affichage dynamique des workshops */}
            <div className={"div-cards"}>
                {workshops.length > 0 ? (
                    workshops.map((workshop: Workshop, index: number) => (
                        <Card key={index} title={workshop.title || t("no_title")} className={"card"}>
                            <Typography variant={"h5"} sx={{ fontWeight: 'bold' }}>
                                {t("description")}
                            </Typography>
                            <p>{workshop.description || t("no_description")}</p>

                            <Typography variant={"h6"} sx={{ fontWeight: 'bold', mt: 2 }}>
                                {t("time")}
                            </Typography>
                            <p>{workshop.schedule?.time || t("no_time")}</p>

                            <Typography variant={"h6"} sx={{ fontWeight: 'bold', mt: 2 }}>
                                {t("equipment")}
                            </Typography>
                            <p>{workshop.schedule?.equipment || t("no_equipment_needed")}</p>

                            <Typography variant={"h6"} sx={{ fontWeight: 'bold', mt: 2 }}>
                                {t("activities")}
                            </Typography>
                            {workshop.activities && workshop.activities.length > 0 ? (
                                <ul>
                                    {workshop.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{t("no_activities")}</p>
                            )}

                            <Typography variant={"h6"} sx={{ fontWeight: 'bold', mt: 2 }}>
                                {t("topics")}
                            </Typography>
                            {workshop.topics && workshop.topics.length > 0 ? (
                                <ul>
                                    {workshop.topics.map((topic, i) => (
                                        <li key={i}>{topic}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{t("no_topics")}</p>
                            )}

                            <Button>{t("voir_plus")}</Button>
                        </Card>
                    ))
                ) : (
                    <p>{t("no_workshops")}</p>
                )}
            </div>
        </Container>
    );
};

export default Workshops;
