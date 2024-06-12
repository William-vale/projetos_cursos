import React from "react";
import { Corpo } from "./style";
import Login from "./pages/Login";
import GlobalStyle from "./globals/globalstyle";

const App: React.FC = () => {
  return (
    <Corpo>
      <Login/>
      <GlobalStyle/>
    </Corpo>
  );
};

export default App;