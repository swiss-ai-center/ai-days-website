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

    const datesList: {
        date: string,
        points: string[]
    }[] = t(`years.${selectedYearIndex(year)}.dates.dates`, {returnObjects: true});

    return (
        <Container maxWidth={"lg"}>
            <Paper sx={{p: 2, my: 3}}>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2}}>
                    <Typography variant={"h2"}
                                sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.dates.title`)}</Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', p: 2}}>
                    <Typography variant={"h4"}
                                sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.dates.dates_title`)}</Typography>
                    <Typography variant={"body1"} pt={1}>{t(`years.${selectedYearIndex(year)}.dates.description`)}</Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}}>
                    <List component={"nav"}>
                        {datesList.map((item: { date: string, points: string[] }) => (
                            <Box pb={2} key={item.date}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CalendarToday color={"primary"}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        children={<Typography variant={"h5"}>{item.date}</Typography>} />
                                </ListItemButton>
                                <Collapse in={true} timeout="auto" unmountOnExit sx={{pl: 4}}>
                                    <List component={"div"} disablePadding>
                                        {item.points.map((point: string, index: number) => {
                                            return (
                                                <ListItemButton key={index} sx={{pl: 2}}>
                                                    <ListItemIcon>
                                                        <ExpandCircleDownRoundedIcon color={"secondary"}
                                                                                     sx={{transform: 'rotate(-90deg)'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={point}/>
                                                </ListItemButton>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}


export default Dates;
