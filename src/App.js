import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
  state = {
    language: "en",
  };

  selectLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.selectLanguage}>
          <option value="en">Inglese</option>
          <option value="it">Italiano</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
