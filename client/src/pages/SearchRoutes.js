import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col} from "../components/Grid";
import Card from "../components/Card";
import axios from "axios";

function Search() {
    const [route, setRoute] = useState(
       { start_location: "Royal Oak Michigan",
        end_location: "Detroit Michigan"}
        )
    const [currentRoute, setCurrent] = useState([]);
    const [routeInstructions, setInstructions] = useState([]);
    const [startCoordinates, setStart] = useState([]);
    const [endCoordinates, setEnd] = useState([]);
    const [weather, setWeatherQuery] = useState([]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setRoute({ ...route, [name]: value })
    }

    useEffect(() => {
        pageLoad()
    }, [])

    function pageLoad() {
        API.findCoords(route.start_location)
        .then(res => setStart({
            latStart: res.data.features[0].geometry.coordinates[1],
            lonStart: res.data.features[0].geometry.coordinates[0]
        }))
         API.findCoords(route.end_location)
        .then(res => setEnd({
            latEnd: res.data.features[0].geometry.coordinates[1],
            lonEnd: res.data.features[0].geometry.coordinates[0]
        }))
        API.findCoords(route.start_location)
            .then(res => {
                axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + res.data.features[0].geometry.coordinates[1] + "&lon=" + res.data.features[0].geometry.coordinates[0] + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")
                    .then(res => setWeatherQuery(res.data.daily))
            })
    }
    function handleFormSubmit(event) {
        event.preventDefault(); 
        API.findCoords(route.start_location)
        .then(res => setStart({
            latStart: res.data.features[0].geometry.coordinates[1],
            lonStart: res.data.features[0].geometry.coordinates[0]
        }))
         API.findCoords(route.end_location)
        .then(res => setEnd({
            latEnd: res.data.features[0].geometry.coordinates[1],
            lonEnd: res.data.features[0].geometry.coordinates[0]
        }))
        API.findCoords(route.start_location)
            .then(res => {
                axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + res.data.features[0].geometry.coordinates[1] + "&lon=" + res.data.features[0].geometry.coordinates[0] + "&units=imperial&appid=101220419d85ffb610459f1145df78ff")
                    .then(res => setWeatherQuery(res.data.daily))
            })

    };

    let start = startCoordinates.lonStart + "," + startCoordinates.latStart
    let end = endCoordinates.lonEnd + "," + endCoordinates.latEnd
    let map = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(" + start + "),pin-s-b+000(" + end + ")/auto/500x300?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"


    axios.get("https://api.mapbox.com/directions/v5/mapbox/cycling/" + start + ";" + end + "?steps=true&access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A")
        .then(response => {
            setInstructions(response.data.routes[0].legs[0].steps)
        }
        )

    function Save(event){
        event.preventDefault();
            API.createRoutes({
            start_location: route.start_location,
            end_location: route.end_location,
            startCord: startCoordinates,
            endCord: endCoordinates      
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
            <div className="card" id="search">
                <div className="card-body">
                <form id="newRoute" onSubmit={handleFormSubmit}>
                    <Input
                        value={route.start_location}
                        onChange={handleInputChange}
                        type="text"
                        name="start_location"
                        placeholder="Start: Road, City, State"
                    />
                    <Input
                        value={route.end_location}
                        onChange={handleInputChange}
                        type="text"
                        name="end_location"
                        placeholder="End: Road, City, State"
                    />
                    <button type="submit" className="btn btn-light" id="submit">Search Routes</button>
                </form>
                </div>
                </div>

                <Row>
            <Card
                    key="location"
                    id={currentRoute._id}
                    cardTitleOne={route.start_location}
                    cardTitleTwo={route.end_location}
                    to="to"
                />
             <button type="submit" className="btn btn-light" onClick={Save} id="submit">Save This Route</button>

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

export default Search;