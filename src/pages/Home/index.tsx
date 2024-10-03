import React from 'react';
import { Box, Container, Typography, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './styles.css';
import Footer from "../../components/Footer/footer";

const Home: React.FC = () => {
    const { t } = useTranslation();

    // Récupérer l'année depuis le store Redux
    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", { returnObjects: true });
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);
    const descriptionList: string[] = t(`years.${selectedYearIndex(year)}.home.description.list`, { returnObjects: true });

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
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                    {t(`years.${selectedYearIndex(year)}.home.title`)}
                </Typography>
                <Typography variant="h4" sx={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                    {t(`years.${selectedYearIndex(year)}.home.subtitle`)}
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

            {/* Main Content Section */}
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3, boxShadow: 2 }}>
                <Box sx={{ textAlign: 'justify', mb: 4 }}>
                    <Typography variant="body1" paragraph>
                        {t(`years.${selectedYearIndex(year)}.home.description.par1`)}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {t(`years.${selectedYearIndex(year)}.home.description.par2`)}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {t(`years.${selectedYearIndex(year)}.home.description.par3`)}
                    </Typography>
                </Box>

                {/* List of Key Points */}
                <List sx={{ pl: 2 }}>
                    {descriptionList.map((item: string, index: number) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <ExpandCircleDownRoundedIcon color="primary" sx={{ transform: 'rotate(-90deg)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="body1" paragraph>
                    {t(`years.${selectedYearIndex(year)}.home.description.end`)}
                </Typography>

                {/* Call to Action */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ py: 1.5, px: 4, fontSize: '1rem', fontWeight: 'bold', borderRadius: 2 }}
                    >
                        <a href="https://form.jotform.com/242613280391351" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                            {t(`years.${selectedYearIndex(year)}.home.register`) || 'Inscrivez-vous maintenant'}
                        </a>
                    </Button>
                </Box>
            </Paper>
            <Footer />
        </Container>
    );
};

export default Home;
