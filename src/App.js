import React from "react";
import "./App.css";
import "./css/anims.css";
import "./fontello/css/fontello.css";
import "./icons/font/flaticon.css";
import Navbar from "./componentsHook/Navbar";
// import Front from './components/Front';
import FrontPage from "./componentsHook/FrontPage";

function App() {
  return (
    <React.Fragment>
      <div className="menuback col-12 header-top-menuback">
        <Navbar />
      </div>
      {/* <Front /> */}
      <FrontPage />
    </React.Fragment>
  );
}

export default App;
