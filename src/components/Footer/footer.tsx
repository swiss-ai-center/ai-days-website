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
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-1`)}  // Lien vers La Mobiliere
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={t(`years.${selectedYearIndex(year)}.footer.partner-1.icon`)} alt="La Mobilière"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-2.link`)} // Lien vers EHL
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={t(`years.${selectedYearIndex(year)}.footer.partner-2.icon`)} alt="EHL"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-5.link`)} // Lien vers OPI
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={t(`years.${selectedYearIndex(year)}.footer.partner-5.icon`)} alt="OPI"
                                 sx={{height: '40px', objectFit: 'contain'}}/>
                        </Box>


                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-3.link`)} // Lien vers HES-SO
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={t(`years.${selectedYearIndex(year)}.footer.partner-3.icon`)} alt="HES-SO"
                                 sx={{height: '50px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-4.link`)} // Lien vers HEIG
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={t(`years.${selectedYearIndex(year)}.footer.partner-4.icon`)} alt="HEIG"
                                 sx={{height: '40px', objectFit: 'contain'}}/>
                        </Box>

                        <Box
                            component="a"
                            href={t(`years.${selectedYearIndex(year)}.footer.partner-6.link`)} // Lien vers HEIG
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{mx: 2}}
                        >
                            <Box component="img" src={t(`years.${selectedYearIndex(year)}.footer.partner-6.icon`)} alt="HEIG"
                                 sx={{height: '40px', objectFit: 'contain'}}/>
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
                    {' 2022-' + new Date().getFullYear() + '. Contact: ai-days-2025 at swiss-ai-center.ch'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
