import { CalendarToday } from '@mui/icons-material';
import { List, Paper, Collapse, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Dates: React.FC = () => {
    const {t} = useTranslation();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const topics: string[] = t(`years.${selectedYearIndex(year)}.call-for-paper.topics`, { returnObjects: true }) as string[];
    const submissionTypes: { title: string, description: string }[] = t(`years.${selectedYearIndex(year)}.call-for-paper.submission-types.types`, { returnObjects: true }) as { title: string, description: string }[];

    // Dates clés récupérées sous forme de tableau
    const keyDates: string[] = t(`years.${selectedYearIndex(year)}.call-for-paper.key-dates.dates`, { returnObjects: true }) as string[];

    return (
        <Container maxWidth={"xl"}>
            <Paper sx={{ p: 2, my: 3, border: 2, borderRadius: 2, borderColor: 'lightgrey' }} elevation={0}>
                {/* Titre de l'événement */}
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2 }}>
                    <Typography variant={"h2"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.title`)}</Typography>
                </Box>

                {/* Présentation du CSIA-PME */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.csia-pme.title`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.csia-pme.description`)}</Typography>
                </Box>

                {/* event-description  */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.event-description.title`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.event-description.paragraph1`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.event-description.paragraph2`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.event-description.paragraph3`)}</Typography>
                </Box>


                {/* Sujets principaux */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <List component={"nav"}>
                        {topics.map((topic: string, index: number) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ExpandCircleDownRoundedIcon color={"primary"} />
                                </ListItemIcon>
                                <ListItemText primary={topic} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>

                {/* Types de soumission */}
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'justify', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-types.title`)}</Typography>
                    <List component={"nav"}>
                        {submissionTypes.map((submission: any, index: number) => (
                            <Box pb={2} key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ExpandCircleDownRoundedIcon color={"primary"} />
                                    </ListItemIcon>
                                    <ListItemText children={<Typography variant={"h5"}>{submission.title}</Typography>} />
                                </ListItemButton>
                                <Collapse in={true} timeout="auto" unmountOnExit sx={{ pl: 4 }}>
                                    <Typography variant={"body1"}>{submission.description}</Typography>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>

                {/* Dates de soumission */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.key-dates.title`)}</Typography>
                    <List>
                        {keyDates.map((date: string, index: number) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <CalendarToday color={"primary"} />
                                </ListItemIcon>
                                <ListItemText primary={date} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>

                {/* Cadre de soumission */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-guidelines.title`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-guidelines.paragraph1`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-guidelines.paragraph2`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-guidelines.paragraph3`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-guidelines.paragraph4`)}</Typography>
                </Box>

                {/* Adresse des soumissions */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.title`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.description`)}</Typography>
                    <Typography variant={"body1"} pt={1}>
                        <a href={t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.submission-site`)}>
                            {t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.submission-site`)}
                        </a>
                    </Typography>
                    <Typography variant={"body1"} pt={1}>
                        <a href={`mailto:${t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.mail-1`)}`}>
                            {t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.mail-1`)}
                        </a>
                    </Typography>
                    <Typography variant={"body1"} pt={1}>
                        <a href={`mailto:${t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.mail-2`)}`}>
                            {t(`years.${selectedYearIndex(year)}.call-for-paper.submission-address.mail-2`)}
                        </a>
                    </Typography>
                </Box>

                {/* Questions */}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography variant={"h4"} sx={{ fontWeight: 'bold' }}>{t(`years.${selectedYearIndex(year)}.call-for-paper.questions.title`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.call-for-paper.questions.description`)}</Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default Dates;