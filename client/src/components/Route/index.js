import React from "react"; 
import { Row, Col } from "../Grid";
import axios from "axios";
import Card from "../Card";


function Route(props) {
    const [routeInstructions, setInstructions] = useState([]);

    axios.get("https://api.mapbox.com/directions/v5/mapbox/cycling/" + props.startCord.lonStart + "," + props.startCord.latStart + ";" + props.endCord.lonEnd + "," + props.endCord.latEnd + "?steps=true&access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A")
    .then(response => {
        setInstructions(response.data.routes[0].legs[0].steps)
    })

    function Save(event) {
        event.preventDefault();
        API.createRoutes({
            start_location: route.start_location,
            end_location: route.end_location,
            startCord: startCoordinates,
            endCord: endCoordinates
        })
            .catch(err => console.log(err))
    }

    return(
    <div>
                <Row>
                    <Card
                        key="location"
                        cardTitleOne={props.startLocation}
                        cardTitleTwo={props.endLocation}
                        to="to"
                    />
                    <button type="submit" className="btn btn-light" onClick={Save} id="submit">Save This Route</button>
                </Row>

        <Row>
                    <Col size="6">
                        <div>
                            <h2 className="view">Route</h2>
                            <img src={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(" + startCoordinates.lonStart + "," + startCoordinates.latStart + "),pin-s-b+000(" + endCoordinates.lonEnd + "," + endCoordinates.latEnd + ")/auto/500x300?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
                            } alt="route"></img>
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
                    {props.weather.map((temp) =>
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
    </div>
    )
}
export default Route; 