import React, {useState, useEffect, lazy, Suspense} from "react";
import "./App.css";
import "./css/anims.css";
import "./fontello/css/fontello.css";
import "./icons/font/flaticon.css";
import Curtail from "./componentsHook/Curtail";
import Navbar from "./componentsHook/Navbar";
// import FrontPage from "./componentsHook/FrontPage";

let FrontPage;


function App() {
  const [transEnd, setTransEnd] = useState(false);

  useEffect(() => {
    FrontPage = lazy(()=> import("./componentsHook/FrontPage"));
  }, [transEnd]);

  return (
    <React.Fragment>
      <Curtail onTransEnd={setTransEnd} />
      <Suspense fallback={<p>Loading...</p>}>
        {transEnd ? (<FrontPage><div className="menuback col-12 header-top-menuback"><Navbar /></div></FrontPage>) :  <p>...</p>}
      </Suspense>
    
    </React.Fragment>
  )
}

export default App;
