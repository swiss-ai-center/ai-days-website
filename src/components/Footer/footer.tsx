import React from 'react';
import {Box, Typography, Container} from '@mui/material';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const Footer: React.FC = () => {
    const {t} = useTranslation();

    // Récupérer l'année depuis le store Redux
    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#fff',
                color: '#000',
                py: 6,
                borderTop: `4px solid #d41367`,
                mt: 6,
            }}
        >
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {/* Footer Content */}
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', mb: 3}}>
                    {/* Logos Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: '70%',
                        }}
                    >
                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partenaire-1`)}  // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={"mobiliere.png"} alt="La Mobilière"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partenaire-2`)} // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={"ehl-logo.png"} alt="EHL"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partenaire-3`)} // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={"hes-so.png"} alt="HES-SO"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>
                    </Box>

                    {/* Title aligned to the right */}
                    <Typography variant="h6"
                                sx={{fontWeight: 'bold', fontSize: '1.2rem', color: '#d41367', textAlign: 'right'}}>
                        {t(`years.${selectedYearIndex(year)}.footer.title`)}
                    </Typography>
                </Box>

                {/* Footer Bottom Text */}
                <Typography variant="body2" sx={{mt: 2, fontSize: '0.9rem', textAlign: 'center'}}>
                    © {new Date().getFullYear()} {t(`years.${selectedYearIndex(year)}.footer.terms`)}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;