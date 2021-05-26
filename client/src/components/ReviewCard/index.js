import React from "react";
import { Row, Col } from "../Grid";
import Stars from 'simple-rating-stars';
// import "./style.css";

function ReviewCard(props) {
    return (
        <div>

            <div className="card" id={props.id}>
                <div className="card-body">
                    <Row>
                        <Col size="12">
                            <h2 id="start">{props.start}</h2>
                            <h2 id="end">{props.end}</h2>

                            <Stars
                                stars={props.stars}
                                outOf={5}
                                full={'#DEAD85'}
                                empty={'#E1F1FF'}
                                stroke={'#DEAD85'}
                            />


                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="starRating" data-bs-toggle="dropdown" aria-expanded="false">
                                    ⭐️ Rating
                             </button>
                                <div className="dropdown-menu" aria-labelledby="starRating">
                                    <li><button className="dropdown-item" id="star1" type="button" value="1" onClick={props.star1}>1</button></li>
                                    <li><button className="dropdown-item" id="star2" type="button" value="2" onClick={props.star2}>2</button></li>
                                    <li><button className="dropdown-item" id="star3" type="button" value="3" onClick={props.star3}>3</button></li>
                                    <li><button className="dropdown-item" id="star4" type="button" value="4" onClick={props.star4}>4</button></li>
                                    <li><button className="dropdown-item" id="star5" type="button" value="5" onClick={props.star5}>5</button></li>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1" className="whatdidyouthink">What did you think of the book?</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={props.onChange} rows="3" placeholder={props.placeholder}></textarea>
                            </div>
                            <div className="save">
                                <button type="submit" className="btn btn-dark" onClick={props.onClick}>
                                    Save
                        </button>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default ReviewCard;