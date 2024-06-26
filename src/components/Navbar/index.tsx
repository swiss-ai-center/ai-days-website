import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./styles.css"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeYear } from 'utils/reducers/yearSlice';

function Navbar() {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const year = useSelector((state: any) => state.year.value);

    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);
    const yearsValues: string[] = years.map((year) => year.year);

    const pages: {
        name: string,
        enabled: string,
        url: string
    }[] = t(`years.${selectedYearIndex(year)}.menu.pages`, {returnObjects: true});

    const languages: {
        name: string,
        lang: string,
        flag: string
    }[] = t(`years.${selectedYearIndex(year)}.menu.languages`, {returnObjects: true});

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElYear, setAnchorElYear] = React.useState<null | HTMLElement>(null);
    const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleOpenYearMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElYear(event.currentTarget);
    };

    const handleYearMenuClose = (yearVal: string) => {
        setAnchorElYear(null);
        dispatch(changeYear(yearVal));
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLanguageMenuClose = (lang: string) => {
        setAnchorElLang(null);
        i18n.changeLanguage(lang);
    };

    return (
        <AppBar position={"static"} elevation={1}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 2}}>
                        <Link color={"inherit"} to={"/"}
                              style={{textDecoration: "none"}}>
                            <img src={"/logo192.png"} className={"filter-white"}
                                 alt={"AI Days"} height={"40px"}/>
                        </Link>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size={"large"}
                            aria-label={"open drawer"}
                            aria-controls={"menu-appbar"}
                            aria-haspopup={"true"}
                            onClick={handleOpenNavMenu}
                            color={"inherit"}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id={"menu-appbar"}
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.url} onClick={handleCloseNavMenu}
                                          disabled={page.enabled !== "true"}>
                                    <Link color={"inherit"} to={page.url} style={{textDecoration: "none", color: "inherit"}}>
                                        {page.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button key={page.url} color={"inherit"} disabled={page.enabled !== "true"}>
                                <Link to={page.url} style={{textDecoration: "none", color: "inherit"}}>
                                    {page.name}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={t(`years.${selectedYearIndex(year)}.menu.year`)} placement={"bottom"}>
                            <Button
                                size={"large"}
                                aria-label={"change year"}
                                aria-controls={"menu-appbar"}
                                aria-haspopup={"true"}
                                onClick={handleOpenYearMenu}
                                color={"inherit"}
                            >
                                {yearsValues.find((yearValue) => yearValue === year)}
                            </Button>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id={"menu-appbar"}
                            anchorEl={anchorElYear}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElYear)}
                            onClose={() => handleYearMenuClose(year)}
                        >
                            {yearsValues.map((yearVal) => (
                                <MenuItem key={yearVal} onClick={() => handleYearMenuClose(yearVal)}>
                                    <Typography textAlign="center">{yearVal}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={t(`years.${selectedYearIndex(year)}.menu.language`)} placement={"bottom"}>
                            <Button
                                size={"large"}
                                aria-label={"change language"}
                                aria-controls={"menu-appbar"}
                                aria-haspopup={"true"}
                                onClick={handleOpenLanguageMenu}
                                color={"inherit"}
                            >
                                {languages.find((language) => language.lang === i18n.language)?.flag}
                            </Button>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id={"menu-appbar"}
                            anchorEl={anchorElLang}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElLang)}
                            onClose={() => handleLanguageMenuClose(i18n.language)}
                        >
                            {languages.map((language) => (
                                <MenuItem key={language.flag} onClick={() => handleLanguageMenuClose(language.lang)} value={i18n.language}>
                                    <Typography textAlign="center">{language.name + " " + language.flag}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}} px={2}>
                        <Link color={"inherit"} to={"/"} style={{textDecoration: "none"}}>
                            <img src={"/logo192.png"} className={"filter-white"} style={{marginTop: "3px"}}
                                 alt={"AI Days"} height={"25px"}/>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
