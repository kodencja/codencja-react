import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import "./css/anims.css";
import "./fontello/css/fontello.css";
import "./icons/font/flaticon.css";
import Curtain from "./componentsHook/Curtain";
import FrontPage from "./componentsHook/FrontPage";
import Navbar from "./componentsHook/Navbar";

// let FrontPage;

function App() {
  const [transEnd, setTransEnd] = useState(true);

  // useEffect(() => {
  //   FrontPage = lazy(() => import("./componentsHook/FrontPage"));
  // }, [transEnd]);

  return (
    <React.Fragment>
      {!transEnd ? (
        <>
          <button className="btn btn-sm skip" onClick={() => setTransEnd(true)}>
            Skip intro
          </button>
          <Curtain onTransEnd={setTransEnd} />
        </>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <FrontPage>
            <div className="menuback col-12 header-top-menuback">
              <Navbar />
            </div>
          </FrontPage>
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
