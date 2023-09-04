// eslint-disable-next-line no-unused-vars
import { ThemeContext, createGlobalStyle } from "styled-components";
import Toggler from "./Toggler";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.darkMode ? '#334' : '#eef'};
    color: ${props => props.darkMode ? '#eee' : '#222'}
  }
`;  

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <GlobalStyles darkMode={darkMode} />
        <h3>Dark Mode: </h3>
        <Toggler />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
