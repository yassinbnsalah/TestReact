import axios from "axios";
import React, { useEffect, useState } from "react";
import { getallEvents } from "./service/api";
import { Link } from "react-router-dom";
import EventsDetails from "./EventsDetails";

function Events() {
  const [events, setEvents] = useState([]);
  const [detailsEvent , setDetailsEvent ] = useState(null)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getallEvents();
        console.log(eventsData.data);
        setEvents(eventsData.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  const handleEventDetails = (event) =>{
    setDetailsEvent(event)
  }
  return (
    <div>
      {events?.map((event, index) => (
        <div key={index}>
          <a onClick={() => handleEventDetails(event)}>
            {event.name}</a></div>
      ))}


      {detailsEvent && ( detailsEvent.name)}


      <Link to={"/event/add"}> GOTO</Link>
    </div>
  );
}

export default Events;
