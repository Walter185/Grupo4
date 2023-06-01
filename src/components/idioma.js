import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Idioma () {
    const [ t, i18n ] = useTranslation ("traduccion");

   return(
        <div>
            <h1> {t("saludos.saludo")}</h1>
            <br />
            <br />
            <button onClick={ ()=> i18n.changeLanguage("es")}>ES</button>
            <button onClick={ ()=> i18n.changeLanguage("en")}>EN</button>
        </div>

    )
}