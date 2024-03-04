import React from "react";
import { useParams } from "react-router-dom";

function EventsDetails() {
  const { id } = useParams();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getallEvents(id);
        console.log(eventsData.data);
        setEvents(eventsData.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  return <div></div>;
}

export default EventsDetails;
