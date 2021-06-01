import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ReviewCard from "../components/ReviewCard";
import { createBrowserHistory } from "history";
import { Container, Row } from "../components/Grid";

function SavedRoutes() {
    const [routes, setRoutes] = useState([])
    const [routeReview, setReview] = useState([])
    const history = createBrowserHistory({ forceRefresh: true });
    // let { userId } = useParams(); if I create unique loginseventually would pass into load routes

    useEffect(() => {
        loadRoutes()
    }, [])

    function loadRoutes() {
        API.findRoutes()
            .then(res => setRoutes(res.data))
            .catch(err => console.log(err));
    };

    // Work on making DRY
    function ratingChanged1(e, route) {
        e.preventDefault()
        const btn = document.getElementById("star1")
        API.updateRating({
            _id: route._id,
            rating: btn.value
        }).then(
            history.push(`/saved/`) //if pass in unique ids this would have to be a param eventually 
        )
    }
    function ratingChanged2(e, route) {
        e.preventDefault()
        const btn = document.getElementById("star2")
        API.updateRating({
            _id: route._id,
            rating: btn.value
        }).then(
            history.push(`/saved/`) //if pass in unique ids this would have to be a param eventually 
        )
    }
    function ratingChanged3(e, route) {
        e.preventDefault()
        const btn = document.getElementById("star3")
        API.updateRating({
            _id: route._id,
            rating: btn.value
        }).then(
            history.push(`/saved/`) //if pass in unique ids this would have to be a param eventually 
        )
    }
    function ratingChanged4(e, route) {
        e.preventDefault()
        const btn = document.getElementById("star4")
        API.updateRating({
            _id: route._id,
            rating: btn.value
        }).then(
            history.push(`/saved/`) //if pass in unique ids this would have to be a param eventually 
        )
    }
    function ratingChanged5(e, route) {
        e.preventDefault()
        const btn = document.getElementById("star5")
        API.updateRating({
            _id: route._id,
            rating: btn.value
        }).then(
            history.push(`/saved/`) //if pass in unique ids this would have to be a param eventually 
        )
    }
    function handleInputChange(event) {
        const { value } = event.target;
        setReview(value);
    };

    function handleReviewSubmit(e, route) {
        e.preventDefault()
        API.updateReview({
            _id: route._id,
            review: routeReview,
        })
    };

    function deleteRoute(id) {
        API.deleteRoute(id)
            .then(res => loadRoutes())
            .catch(err => console.log(err));
    }

    return (
        <div>
             <Container>
                <Row>

                    {routes.map((route, index) =>

                        <ReviewCard
                            key={index}
                            id={route._id}
                            start={route.start_location}
                            end={route.end_location}
                            placeholder={route.review}
                            stars={route.rating}
                            value={routeReview}
                            onChange={handleInputChange}
                            onClick={(e) => { handleReviewSubmit(e, route) }}
                            star1={(e) => ratingChanged1(e, route)}
                            star2={(e) => ratingChanged2(e, route)}
                            star3={(e) => ratingChanged3(e, route)}
                            star4={(e) => ratingChanged4(e, route)}
                            star5={(e) => ratingChanged5(e, route)}
                            link={route._id}
                            delete={() => deleteRoute(route._id)}
                        />
                    )}

                </Row>
            </Container>
        </div>
    )
}
export default SavedRoutes;