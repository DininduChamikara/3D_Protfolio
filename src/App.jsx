import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { useState } from "react";

const App = () => {
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    setIsFullyLoaded(true);
  });

  return (
    <BrowserRouter>
      {isFullyLoaded ? (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeate bg-center">
            <Navbar />
            <Hero />
            {isFullyLoaded ? <div>Loaded</div> : <div>Loading...</div>}
          </div>
          <About />
          <Experience />
          {/* <div className="hidden sm:block"> */}
          <Tech />
          {/* </div> */}
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </BrowserRouter>
  );
};

export default App;
