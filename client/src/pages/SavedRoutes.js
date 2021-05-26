import React, { useState, useEffect } from "react";
import API from "../utils/API"; 
import ReviewCard from "../components/ReviewCard";

function SavedRoutes() {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        loadRoutes()
    }, [])

    function loadRoutes(){
        API.findRoutes()
        .then(res => setRoutes(res.data))
        .catch(err => console.log(err)); 
    }; 

    return (
        <div>
            <p>Saved Routes</p>

            {routes.map((route, index) =>
            <ReviewCard
            key={index}
            id={route.id}
            start={route.start_location}
            end={route.end_location}
            placeholder={route.review}
            stars={route.rating}
             />)}
        </div>
    )
}
export default SavedRoutes;