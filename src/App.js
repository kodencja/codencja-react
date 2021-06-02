import React from "react";
import "./App.css";
import "./css/anims.css";
import "./fontello/css/fontello.css";
import "./icons/font/flaticon.css";
import Navbar from "./componentsHook/Navbar";
import FrontPage from "./componentsHook/FrontPage";

function App() {
  return (
    <React.Fragment>
      {/* <Front /> */}
      <FrontPage>
        <div className="menuback col-12 header-top-menuback">
          <Navbar />
        </div>
      </FrontPage>
    </React.Fragment>
  );
}

export default App;
