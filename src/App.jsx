import { useState } from "react";
import "./App.css";
import CardDetails from "./components/CardDetails";
import Contest from "./components/Contest";
import CreateChallenge from "./components/CreateChallenge";

import Details from "./components/Details";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <div>
          <Navbar />

          <Hero setShow={setShow} />
          <Stats />
          <Details />
          <Explore />
          <Contest />
        </div>
      ) : (
        <CreateChallenge />
      )}
    </>
  );
}

export default App;
