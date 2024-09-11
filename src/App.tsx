import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import Navbar from 'components/Navbar';
import Contact from 'pages/Contact';
import Dates from 'pages/Dates';
import Home from 'pages/Home';
import Partners from 'pages/Partners';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
    const {t} = useTranslation();
    const colorMode = useSelector((state: any) => state.colorMode.value);
    const lightgrey = grey[300];
    const darkgrey = grey[900];

    const year = useSelector((state: any) => state.year.value);

    const years: { year: string }[] = t("years", {returnObjects: true});
    const selectedYearIndex = (yearToFind: string) => years.findIndex((yearObj) => yearObj.year === yearToFind);

    const pages: {
        name: string,
        component: string,
        enabled: string,
        url: string
    }[] = t(`years.${selectedYearIndex(year)}.menu.pages`, {returnObjects: true});

    const Components: any = {
        dates: Dates,
        home: Home,
        contact: Contact,
        partners: Partners,
    };


    const getDesignTokens = useCallback((mode: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: {
                        main: '#d41367',
                    },
                    primary_light: {
                        main: '#e989b3',
                    },
                    secondary: {
                        main: '#89264f'
                    },
                    background_color: {
                        main: lightgrey,
                    }
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#d41367'
                    },
                    primary_light: {
                        main: '#89264f',
                    },
                    secondary: {
                        main: '#e989b3'
                    },
                    background_color: {
                        main: darkgrey,
                    }
                })
        },
        typography: {
            fontFamily: ["Neue Haas Grotesk Display Pro, sans-serif", "Helvetica now, sans-serif"].join(','),
        },
        components: {
            MuiFab: {
                styleOverrides: {
                    sizeSmall: {
                        width: 24,
                        height: 24,
                        minHeight: 'unset',
                        '& .MuiSvgIcon-root': {
                            fontSize: 16,
                        },
                    },
                },
            },
        },
    }), [darkgrey, lightgrey]);

    const theme = React.useMemo(
        () =>
            createTheme(getDesignTokens(colorMode)),
        [colorMode, getDesignTokens],
    );
    return (
        <ThemeProvider theme={theme}>

            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            {/* End CssBaseline */}


            {/* Main content */}
            <Router>
                <Navbar/>
                <Routes>
                    {pages.map((page, index) => {
                        if(page.enabled === "true") {
                            return (
                                <Route key={index} path={`${page.url}`}
                                       element={React.createElement(Components[page.component])}/>
                            );
                        }
                        return null;
                    })}
                    <Route path={"*"} element={<Home />}/>
                </Routes>
            </Router>
            {/* End Main content */}

        </ThemeProvider>
    );
}

export default App;
