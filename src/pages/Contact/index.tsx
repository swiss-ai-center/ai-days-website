import {
    ApartmentRounded,
    GavelRounded,
    Groups3Rounded,
    InterestsRounded,
    PaymentsRounded,
    PersonRounded, ViewTimelineRounded
} from '@mui/icons-material';
import { List, Paper, Collapse, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Contact: React.FC = () => {
    const {t} = useTranslation();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const members: {
        role: string,
        icon: string,
        members: string[]
    }[] = t(`years.${selectedYearIndex(year)}.contact.members`, {returnObjects: true});

    const icons: { [key: string]: any } = {
        GavelRounded: GavelRounded,
        PaymentsRounded: PaymentsRounded,
        ApartmentRounded: ApartmentRounded,
        ViewTimelineRounded: ViewTimelineRounded,
        InterestsRounded: InterestsRounded,
        Groups3Rounded: Groups3Rounded,
    };

    return (
        <Container maxWidth={"xl"}>
            <Paper sx={{p: 2, my: 3, border: 2, borderRadius: 2, borderColor: 'lightgrey'}} elevation={0}>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2}}>
                    <Typography variant={"h2"}
                                sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.contact.title`)}</Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', p: 2}}>
                    <Typography variant={"h4"}
                                sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.contact.contact_title`)}</Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}}>
                    <List component={"nav"}>
                        {members.map((item: { role: string, icon: string, members: string[] }) => (
                            <Box pb={2} key={item.role}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {React.createElement(icons[item.icon], {color: "primary"})}
                                    </ListItemIcon>
                                    <ListItemText
                                        children={<Typography variant={"h5"}>{item.role}</Typography>}/>
                                </ListItemButton>
                                <Collapse in={true} timeout="auto" unmountOnExit sx={{pl: 4}}>
                                    <List component={"div"} disablePadding>
                                        {item.members.map((member: string, index: number) => {
                                            return (
                                                <ListItemButton key={index} sx={{pl: 2}}>
                                                    <ListItemIcon>
                                                        <PersonRounded color={"secondary"}/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={member}/>
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


export default Contact;
