import { Component } from "react";
import { Link } from "react-router-dom";
import { MovieData } from "../../types/home";
import { MainDiv, SubDiv } from "../styledComponents/homeMovieCard";
import Header from "../header";


class MainMovieCard extends Component<MovieData> {
    

    render(){

        const {id, backdropPath, posterPath, title, overview} = this.props.movieData;

        return (
            <MainDiv imgSrc={backdropPath} mobileBgUrl={posterPath}>
                <Header />
                <SubDiv>
                    <h1>{title}</h1>
                    <p>{overview}</p>
                    <button><Link to={`/movies/${id}`}>Play</Link></button>
                </SubDiv>
            </MainDiv>
        )
    }
}

export default MainMovieCard;