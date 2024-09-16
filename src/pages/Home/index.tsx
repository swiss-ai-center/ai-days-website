import { List, Paper, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
    const {t} = useTranslation();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const descriptionList: string[] = t(`years.${selectedYearIndex(year)}.home.description.list`, {returnObjects: true});

    return (
        <Container maxWidth={"xl"}>
            <Paper sx={{p: 2, my: 3, border: 2, borderRadius: 2, borderColor: 'lightgrey'}} elevation={0}>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2}}>
                    <Typography variant={"h2"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.home.title`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}} p={2}>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.home.description.par1`)}</Typography>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.home.description.par2`)}</Typography>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.home.description.par3`)}</Typography>
                    <List sx={{pl: 1}}>
                        {descriptionList.map((item: string, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <ExpandCircleDownRoundedIcon color={"primary"} sx={{transform: 'rotate(-90deg)'}}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={item}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.home.description.end`)}</Typography>
                </Box>
            </Paper>
        </Container>
    );
}


export default Home;
