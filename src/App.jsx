import { useState } from "react";
import HelloC from "./hello";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import EventsDetails from "./EventsDetails";
import AddEvent from "./AddEvent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HelloC title={"hallll"} class={"GG"}></HelloC>}
        />
         <Route path="/events" element={<Events />} />*
         <Route path="/event/add" element={<AddEvent />} />
         <Route path="/event/:id" element={<EventsDetails />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
