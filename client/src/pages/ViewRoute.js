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
           { setStartCoordinates({ latStart: res.data.features[0].geometry.coordinates[1], lonStart: res.data.features[0].geometry.coordinates[0] })
           axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + res.data.features[0].geometry.coordinates[1] + "&lon=" + res.data.features[0].geometry.coordinates[0] + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")
            .then(res => setWeatherQuery(res.data.daily))
        })
        API.findCoords(end)
        .then(res => setEndCoordinates({ latEnd: res.data.features[0].geometry.coordinates[1], lonEnd: res.data.features[0].geometry.coordinates[0] }))
    }

    return (
        <div>
           {console.log(weather)}
           {console.log("https://api.openweathermap.org/data/2.5/onecall?lat=" +startCoordinates.lonStart + "&lon=" + startCoordinates.latStart + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")}
           {weather.map((temp, index) =>
           <Card 
               key={index}
               id={temp[index]}
               cardTitleOne={temp.temp.day}
               cardContent={temp.weather[0].main}
           />
           )}

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