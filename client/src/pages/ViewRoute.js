import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import { Container, Row, Col } from "../components/Grid";

function ViewRoute() {
    const [currentRoute, setCurrent] = useState([]);
    const [routeInstructions, setInstructions] = useState([]);
    const [startCoordinates, setStart] = useState([]);
    const [endCoordinates, setEnd] = useState([]);
    const [weather, setWeatherQuery] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        loadRoutes(id)
    }, [id])

    function loadRoutes(id) {
        API.findOne(id)
            .then(res => {
                setCurrent(res.data)
                findWeather(res.data)
                routeDetails(res.data)

            })
            .catch(err => console.log(err));
    }

    function findWeather(data) {
        let start = data.start_location;
        API.findCoords(start)
            .then(res => {
                axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + res.data.features[0].geometry.coordinates[1] + "&lon=" + res.data.features[0].geometry.coordinates[0] + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")
                    .then(res => setWeatherQuery(res.data.daily))
            })
    }

console.log(currentRoute)
let map = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(" + currentRoute.start_coordinates + "),pin-s-b+000(" + currentRoute.end_coordinates + ")/auto/500x300?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"

function routeDetails(data) {
    axios.get("https://api.mapbox.com/directions/v5/mapbox/cycling/" + data.start_coordinates + ";" + data.end_coordinates + "?steps=true&access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A")
    .then(response => { 
        setInstructions(response.data.routes[0].legs[0].steps)
    })
}
    return (
        <div>
            <Container>
            <Row>
            <Card
                    key="location"
                    id={currentRoute._id}
                    cardTitleOne={currentRoute.start_location}
                    cardTitleTwo={currentRoute.end_location}
                    to="to"
                />
            </Row>
                <Row>
                <Col size="6"> 
                <div>
                    <h2 className="view">Route</h2>
                    <img src={map} alt="route"></img>
                </div>
                </Col>
                <Col size="6">
                <div id="routeInstructions"> 
                <h2 className="view">Route Instructions</h2>
                {/* do an or in case this doenst load */}
                    {routeInstructions.map((route, index) =>
                        <li key={index}>
                            {route.maneuver.instruction}
                        </li>
                    )}
                </div>
                
                </Col>
                </Row>
                <Row>
                <h2 className="view">8 Day Forecast</h2>
                    {weather.map((temp) =>
                        <Col size="3" key={temp.dt}>
                            <Card
                                key={temp.dt}
                                cardTitleOne={temp.temp.day}
                                to="°F"
                                cardContent={temp.weather[0].main}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}
export default ViewRoute;