import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import Navbar from 'components/Navbar';
import About from 'pages/About';
import Home from 'pages/Home';
import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
    const colorMode = useSelector((state: any) => state.colorMode.value);
    const lightgrey = grey[300];
    const darkgrey = grey[900];

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
                    <Route path={"/about"} element={<About />}/>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"*"} element={<Home />}/>
                </Routes>
            </Router>
            {/* End Main content */}

        </ThemeProvider>
    );
}

export default App;
