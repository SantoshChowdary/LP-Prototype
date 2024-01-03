import { Component } from "react";
import { Link } from "react-router-dom";
import { MovieCardImg } from "../styledComponents";

class MovieCard extends Component<any> {
    


    render() {

        const {movieData} = this.props;

        return (
            <Link to={`/movies/${movieData.id}`}>
                <MovieCardImg src={movieData.backdropPath} alt="movie-card" />
            </Link> 
        )
    }
}


export default MovieCard;