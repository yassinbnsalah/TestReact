import { useState } from "react";
import HelloC from "./hello";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Competition from "./competitions/Competition";
import NavigationBar from "./NavigationBar";
import NotFound from "./NotFound";
import CompetitionDetails from "./CompetitionDetails";
import AddCompetition from "./AddCompetition";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavigationBar></NavigationBar>
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/competitions" element={<Competition />} />
         <Route path="/competition/add" element={<AddCompetition />} />
         <Route path="/competition/:id" element={<CompetitionDetails />} />

         <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
    </>
  );
}

export default App;
