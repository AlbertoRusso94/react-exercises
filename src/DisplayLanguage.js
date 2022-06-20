import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Lingue = {
  en: {
    linguaSelezionata: "You selected English language",
  },
  it: {
    linguaSelezionata: "Hai selezionato la lingua Italiano",
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>{Lingue[language].linguaSelezionata}</h1>
    </div>
  );
}
