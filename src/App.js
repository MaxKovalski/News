import React, { useState } from "react";
import "./App.css";
import GetNews from "./News/GetNews";
import Loader from "./Components/Loader";
import Router from "./Router";
export const generalContext = React.createContext();
function App() {
  const [loader, setLoader] = useState(true);
  return (
    <generalContext.Provider value={{ setLoader }}>
      <div>
        {loader && <Loader />}
        <Router />
      </div>
    </generalContext.Provider>
  );
}

export default App;
