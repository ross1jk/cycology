import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { createBrowserHistory } from "history";

function Search() {
    const [route, setRoute] = useState([])
    const history = createBrowserHistory({ forceRefresh: true });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setRoute({ ...route, [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
            API.createRoutes({
            start_location: route.start_location,
            end_location: route.end_location,           
        }).then(res => history.push("/viewroute/" + res.data._id))
        .catch(err => console.log(err))
    };

    return (
        <div>
            <Container>
                <form id="newRoute" onSubmit={handleFormSubmit}>
                    <Input
                        value={route.start_location}
                        onChange={handleInputChange}
                        type="text"
                        name="start_location"
                        placeholder="Road, City, State"
                    />
                    <Input
                        value={route.end_location}
                        onChange={handleInputChange}
                        type="text"
                        name="end_location"
                        placeholder="Road, City, State"
                    />
                    <button type="submit" className="btn btn-light" id="submit">Search Routes</button>
                </form>
            </Container>
        </div>
    )
}

export default Search;