import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Workshops: React.FC = () => {
    const {t} = useTranslation();
    // get the workshop from query params
    const {workshopId} = useParams<{workshopId: string}>();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const workshops: {
        title: string,
        description: string,
    }[] = t(`years.${selectedYearIndex(year)}.workshops.workshops`, {returnObjects: true});

    return (
        <Container maxWidth={"xl"}>
            <Paper sx={{p: 2, my: 3, border: 2, borderRadius: 2, borderColor: 'lightgrey'}} elevation={0}>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2}}>
                    <Typography variant={"h2"}
                                sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.workshops.title`)}</Typography>
                </Box>
            </Paper>
        </Container>
    );
}


export default Workshops;
