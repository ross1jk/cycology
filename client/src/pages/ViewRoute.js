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
                findCoords(res.data)
            })
            .catch(err => console.log(err));
    }

    function findCoords(data) {
        API.findCoords(data.start_location)
            .then(res => setStart({
                latStart: res.data.features[0].geometry.coordinates[1],
                lonStart: res.data.features[0].geometry.coordinates[0]
            }))
        API.findCoords(data.end_location)
            .then(res => setEnd({
                latEnd: res.data.features[0].geometry.coordinates[1],
                lonEnd: res.data.features[0].geometry.coordinates[0]
            }))
    }

    function findWeather(data) {
        let start = data.start_location;
        API.findCoords(start)
            .then(res => {
                axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + res.data.features[0].geometry.coordinates[1] + "&lon=" + res.data.features[0].geometry.coordinates[0] + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")
                    .then(res => setWeatherQuery(res.data.daily))
            })
    }

    //this is probably not best practice, look into more for map and route
    let start = startCoordinates.lonStart + "," + startCoordinates.latStart
    let end = endCoordinates.lonEnd + "," + endCoordinates.latEnd
    let map = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(" + start + "),pin-s-b+000(" + end + ")/auto/500x300?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"


    axios.get("https://api.mapbox.com/directions/v5/mapbox/cycling/" + start + ";" + end + "?steps=true&access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A")
        .then(response => {
            setInstructions(response.data.routes[0].legs[0].steps)
        }
        )

    return (
        <div>
            <Container>
                <Row>
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

                <Card
                    key="location"
                    id={currentRoute._id}
                    cardTitleOne={currentRoute.start_location}
                    cardTitleTwo={currentRoute.end_location}
                    to="to"
                    cardContent={currentRoute.review}
                />

                <div id="routeInstructions">
                    {routeInstructions.map((route, index) =>
                        <li key={index}>
                            {route.maneuver.instruction}
                        </li>
                    )}
                </div>
                <div>
                    <img src={map} alt="route"></img>
                </div>
            </Container>
        </div>
    )
}
export default ViewRoute;