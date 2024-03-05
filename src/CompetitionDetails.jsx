import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CompetitionDetails() {
  const { id } = useParams();
  const [competition, setCompetition] = useState();
  const handleCompetitionDetails = async () => {
    try {
      const compData = await axios.get(
        "http://localhost:3001/competitions/" + id
      );
      console.log(compData.data);
      setCompetition(compData.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    handleCompetitionDetails();
  }, []);
  return (
    <div>
      hackthon : {competition?.hackthon}<br/>
      fees : {competition?.fees}<br/>
      date : {competition?.date}<br/>
      <button disabled={competition?.participants == "0"}> Participate </button>
    </div>
  );
}

export default CompetitionDetails;
