export interface HomeState {
    trendingMoviesList : any[],
    originalsMoviesList : any[],
    shouldShowLoader : boolean,
    randomMovieData : any
}

export interface MovieData {
    movieData : {
        id: string
        backdropPath: string
        posterPath: string
        title: string
        overview: string
    }
    
}