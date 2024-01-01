import { action, observable } from "mobx";

export class MoviesStore {
    @observable public originalsMoviesList = [];
    @observable public PopularMoviesList = [];

    private async getMoviesList(jwtToken : string, url : string) {
        const options = {
            method : "GET",
            headers : {
                "Authorization" : `Bearer ${jwtToken}`
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data)
        if (data.results !== undefined) {
            const moviesList  = data.results.map((movie: any) => {
                return {
                    id : movie.id,
                    backdropPath : movie.backdrop_path,
                    posterPath : movie.poster_path,
                    title : movie.title,
                    overview : movie.overview
                }
            });
            return moviesList;
        } else {
            throw new Error(data.error_msg);;
        }  
    }

    @action async getOriginalsMoviesList(jwtToken : string) {
        const url = "https://apis.ccbp.in/movies-app/originals"
        const originalsMoviesList = await this.getMoviesList(jwtToken, url);
        return originalsMoviesList;
    }

    @action async getTrendingMoviesList(jwtToken : string) {
        const url = "https://apis.ccbp.in/movies-app/trending-movies"
        const trendingMoviesList = await this.getMoviesList(jwtToken, url);
        return trendingMoviesList;
    }

    @action async getPopularMoviesList(jwtToken : string) {
        const url = "https://apis.ccbp.in/movies-app/popular-movies"
        const popularMoviesList = await this.getMoviesList(jwtToken, url);
        return popularMoviesList;
    }

    @action async getTopRatedMovies(jwtToken : string) {
        const url = "https://apis.ccbp.in/movies-app/top-rated-movies"
        const topRatedMoviesList = await this.getMoviesList(jwtToken, url);
        return topRatedMoviesList;
    }

    @action async getMovieDetails(jwtToken : string, movieId : number) {
        const url = `https://apis.ccbp.in/movies-app/movies/${movieId}`
        const options = {
            method : "GET",
            headers : {
                "Authorization" : `Bearer ${jwtToken}`
            }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data)
        if (data.movie_details !== undefined) {
            const movieData = 
                {
                    adult : data.movie_details.adult,
                    backdropPath : data.movie_details.backdrop_path,
                    id : data.movie_details.id,
                    overview : data.movie_details.overview,
                    posterPath : data.movie_details.poster_path,
                    releaseDate : data.movie_details.release_date,
                    title : data.movie_details.title,
                    voteAverage : data.movie_details.vote_average,
                    voteCount : data.movie_details.vote_count,
                    budget : data.movie_details.budget,
                    runtime :data.movie_details.runtime,
                    genres : data.movie_details.genres.map((genre : any) => (
                        {
                            id : genre.id,
                            name : genre.name
                        }
                    )),
                    spokenLanguages : data.movie_details.spoken_languages.map((language : any) => (
                        {
                            id : language.id,
                            englishName  : language.english_name
                        }
                    )),
                    similarMovies : data.movie_details.similar_movies.map((similarMovie : any) => (
                        {
                            id : similarMovie.id,
                            backdropPath : similarMovie.backdrop_path,
                            posterPath : similarMovie.poster_path,
                            title : similarMovie.title
                        }
                    ))
            }
            // console.log(movieData)
            return movieData;
        } else {
            throw new Error(data.error_msg);;
        }
    }
}