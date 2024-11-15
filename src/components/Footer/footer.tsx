import React from 'react';
import { Box, Typography, Container, Divider, Link } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

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
                pb: 4,
                mt: 6,
            }}
        >
            <Divider variant={"fullWidth"} sx={{height: '6px', borderRadius: '3px', backgroundColor: 'primary.main'}}/>

            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4}}>
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
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-1`)}  // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={"mobiliere.png"} alt="La Mobilière"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-2`)} // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={"ehl-logo.png"} alt="EHL"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-3`)} // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={"hes-so.png"} alt="HES-SO"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>
                    </Box>

                    {/* Title aligned to the right */}
                    <Typography variant="h6" color={"primary"}
                                sx={{fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'right'}}>
                        {t(`years.${selectedYearIndex(year)}.footer.title`)}
                    </Typography>
                </Box>

                {/* Footer Bottom Text */}
                <Typography variant={"body2"} color={"text.secondary"} component={"span"} sx={{pt: 1}}>
                    {'Copyright © '}
                    <Link color={"primary"}
                          href={"https://www.hes-so.ch/domaines-et-hautes-ecoles/ingenierie-et-architecture"}
                          target={"_blank"}
                          rel={"noopener noreferrer"}
                          sx={{textDecoration: 'none'}}
                    >
                        HES-SO
                    </Link>
                    {' 2022-' + new Date().getFullYear() + '.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
