import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addEvent } from "./service/api";

function AddEvent() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        img: "",
        price: 0,
        nbTickets: 0,
        nbParticipants: 0,
        like: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to add event
            await addEvent(formData);
            // Redirect user to the list of events page
            navigate("/events");
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };

    return (
        <div>
            <h2>Add an Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" name="img" value={formData.img} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Number of Tickets:</label>
                    <input type="number" name="nbTickets" value={formData.nbTickets} onChange={handleChange} />
                </div>
                <div>
                    <label>Number of Participants:</label>
                    <input type="number" name="nbParticipants" value={formData.nbParticipants} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Add Event</button>
                </div>
            </form>
        </div>
    );
}

export default AddEvent;
