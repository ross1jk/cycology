import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios"; 

function ViewRoute() {
    const [ currentRoute, setCurrent ] = useState([]);
    const [ startCoordinates, setStartCoordinates ] = useState([{ latStart: "", lonStart: "" }]);
    const [ endCoordinates, setEndCoordinates ] = useState([{ latEnd: "", lonEnd: "" }]); 
    const [ weather, setWeatherQuery ] = useState([])
    let { id } = useParams();

    useEffect(() => {
        loadRoutes(id)
    }, [id])

    function loadRoutes(id) {
        API.findOne(id)
            .then(res => {
                setCurrent(res.data)
                findGeo(res.data)
            })
            .catch(err => console.log(err));
    }

    function findGeo(data) {
        let start = data.start_location;
        let end = data.end_location; 
        API.findCoords(start)
        .then(res => 
           { setStartCoordinates({ latStart: res.data.features[0].center[0], lonStart: res.data.features[0].center[1] })
           axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + res.data.features[0].center[0] + "&lon=" + res.data.features[0].center[1] + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")
            .then(res => setWeatherQuery(res.data))
        })
        API.findCoords(end)
        .then(res => setEndCoordinates({ latEnd: res.data.features[0].center[0], lonEnd: res.data.features[0].center[1] }))
    }

    return (
        <div>
           {console.log(weather)}
            <Card
                id={currentRoute._id}
                cardTitleOne={currentRoute.start_location}
                cardTitleTwo={currentRoute.end_location}
                to="to"
                cardContent={currentRoute.review}
            />
        </div>
    )
}
export default ViewRoute;