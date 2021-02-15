import React, { PureComponent } from "react";
import "./App.css";
import "./css/anims.css";
import "./fontello/css/fontello.css";
import "./icons/font/flaticon.css";
import Navbar from "./components/Navbar";
// import Front from './components/Front';
import FrontPage from "./components/FrontPage";

class App extends PureComponent {
  render() {
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
}

export default App;
