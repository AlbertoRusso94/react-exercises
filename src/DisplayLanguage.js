import React from "react";
import { LanguageContext } from "./LanguageContext";

const Lingue = {
  en: {
    linguaSelezionata: "You selected English language",
  },
  it: {
    linguaSelezionata: "Hai selezionato la lingua Italiano",
  },
};
export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>
                <h1>{Lingue[language].linguaSelezionata}</h1>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
