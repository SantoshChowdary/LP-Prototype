import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { StoreContext } from "../../context/storeContext";
import { MainDiv, SubDiv } from '../../components/styledComponents/homeMovieCard';
import { MovieCardDiv, ListHeading, ListDiv } from "../../components/styledComponents";
import MovieCard from "../../components/movieCard";
import Loader from "../../components/loader";

class MovieRoute extends Component<any> {

    state: any = {
        movieDetails : {},
        shouldShowLoader : true,
    }

    getMovieDetailsFromStore = async () => {
        const store: any = this.context;
        const jwtToken = store.authStore.jwtToken;
        const movieId = this.props.match.params.id;
        const movieDetails = await store.moviesStore.getMovieDetails(jwtToken, movieId);
        this.setState({
            movieDetails : movieDetails,
            shouldShowLoader : false,
        })

        console.log(this.state)
    }

    runTimeCalculator = (time : number) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours}h ${minutes}m`;
    }


    componentDidMount(){
        this.getMovieDetailsFromStore()
    }

    render(){

        const {movieDetails, shouldShowLoader} = this.state;

        if (shouldShowLoader){
            return <Loader />
        }

        return (
            <div>
                <MainDiv imgSrc={movieDetails.backdropPath} mobileBgUrl={movieDetails.posterPath}>
                    <Header />
                    <SubDiv>
                        <h1>{movieDetails.title}</h1>
                        <div>
                            <p>{this.runTimeCalculator(movieDetails.runtime)} U/A {movieDetails.releaseDate.slice(0,4)}</p>
                        </div>
                        <p>{movieDetails.overview}</p>
                        <button><Link to={`/movies/${movieDetails.id}`}>Play</Link></button>
                    </SubDiv>
                </MainDiv>
                <MovieCardDiv>
                    <ListDiv>
                        <div>
                            <ListHeading>Genres</ListHeading>
                            <ul>
                                {
                                    movieDetails.genres.map((item : any) => (
                                        <li key={item.id}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <ListHeading>Audio Available</ListHeading>
                            <ul>
                                {
                                    movieDetails.spokenLanguages.map((item : any) => (
                                        <li key={item.id}>{item.englishName}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <ListHeading>Rating Count</ListHeading>
                            <p>{movieDetails.voteCount}</p>
                            <ListHeading>Rating Average</ListHeading>
                            <p>{movieDetails.voteAverage}</p>
                        </div>
                        <div>
                            <ListHeading>Budget</ListHeading>
                            <p>{movieDetails.budget}</p>
                            <ListHeading>Release Date</ListHeading>
                            <p>{movieDetails.releaseDate}</p>
                        </div>
                    </ListDiv>

                    <div>
                        
                        <ul>
                            <ListHeading>More like this</ListHeading>
                            {
                                movieDetails.similarMovies.map((item : any) => (
                                    <MovieCard key={item.id} movieData={item} />
                                ))
                            }
                        </ul>
                    </div>

                </MovieCardDiv>
            </div>
        )
    }

}

MovieRoute.contextType = StoreContext;

export default MovieRoute;