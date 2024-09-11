import { List, Paper, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Partners: React.FC = () => {
    const {t} = useTranslation();

    const year = useSelector((state: any) => state.year.value);
    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const platineVisibilityAndPresence: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.visibility-and-presence`, {returnObjects: true});
    const platineMarketingAndCommunication: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.marketing-and-communication`, {returnObjects: true});

    const goldVisibilityAndPresence: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.visibility-and-presence`, {returnObjects: true});
    const goldMarketingAndCommunication: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.marketing-and-communication`, {returnObjects: true});

    const silverVisibilityAndPresence: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.visibility-and-presence`, {returnObjects: true});
    const silverMarketingAndCommunication: string[] = t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.marketing-and-communication`, {returnObjects: true});

    return (
        <Container maxWidth={"lg"}>
            <Paper sx={{p: 2, my: 3}}>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2}}>
                    <Typography variant={"h2"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.title`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}} p={2}>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.partners.introduction`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'justify'}} p={2}>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.partners.contact`)}</Typography>
                </Box>
                
                <hr/>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.title`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}} p={2}>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.partners.partnerships.platine.description`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.visibility-and-presence`)}</Typography>
                </Box>
                <List sx={{pl: 1}}>
                    {platineVisibilityAndPresence.map((item: string, index: number) => (
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
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.marketing-and-communication`)}</Typography>
                </Box>
                <List sx={{pl: 1}}>
                    {platineMarketingAndCommunication.map((item: string, index: number) => (
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

                <hr/>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.title`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}} p={2}>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.partners.partnerships.gold.description`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.visibility-and-presence`)}</Typography>
                </Box>
                <List sx={{pl: 1}}>
                    {goldVisibilityAndPresence.map((item: string, index: number) => (
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
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.marketing-and-communication`)}</Typography>
                </Box>
                <List sx={{pl: 1}}>
                    {goldMarketingAndCommunication.map((item: string, index: number) => (
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

                <hr/>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.title`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}} p={2}>
                    <Typography variant={"body1"} py={1}>{t(`years.${selectedYearIndex(year)}.partners.partnerships.silver.description`)}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.visibility-and-presence`)}</Typography>
                </Box>
                <List sx={{pl: 1}}>
                    {silverVisibilityAndPresence.map((item: string, index: number) => (
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
                <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', p: 2}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>{t(`years.${selectedYearIndex(year)}.partners.marketing-and-communication`)}</Typography>
                </Box>
                <List sx={{pl: 1}}>
                    {silverMarketingAndCommunication.map((item: string, index: number) => (
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


            </Paper>
        </Container>
    );
}


export default Partners;
