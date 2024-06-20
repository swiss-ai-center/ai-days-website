import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <header className="App-header">
                <img src={"/logo512.png"} className="App-logo" alt="logo"/>
                <p>{t("home.description.par1")}</p>
                <p>{t("home.description.par2")}</p>
                <p>{t("home.description.par3")}</p>
                <ul>
                    <li>{t("home.description.list.item1")}</li>
                    <li>{t("home.description.list.item2")}</li>
                    <li>{t("home.description.list.item3")}</li>
                </ul>
                <p>{t("home.description.end")}</p>
            </header>
        </div>
    );
}

export default App;
