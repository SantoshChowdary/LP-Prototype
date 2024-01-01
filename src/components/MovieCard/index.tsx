import { Component } from "react";
import { Link } from "react-router-dom";
import { MovieCardImg } from "../styledComponents";

class MovieCard extends Component {
    


    render() {
        return (
            <Link to="/">
                <MovieCardImg src="https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png" alt="movie-card" />
            </Link>
        )
    }
}


export default MovieCard;