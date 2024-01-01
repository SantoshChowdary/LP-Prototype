import { Component } from "react";
import { StoreContext } from "../../context/storeContext";
import Header from "../../components/header";
import Loader from "../../components/loader";
import { HomeState } from "../../types/home";
import MovieCard from "../../components/MovieCard";
import MainMovieCard from "../../components/mainMovieCard";



class Home extends Component <{}, HomeState> {
    constructor(props : any){
        super(props)
        this.state = {
            trendingMoviesList : [],
            originalsMoviesList : [],
            shouldShowLoader : true,
            randomMovieData : {}
        }
    }

    getMoviesData = async () => {
        const store: any = this.context;
        const jwtToken = store.authStore.jwtToken;
        const trendingMoviesList = await store.moviesStore.getTrendingMoviesList(jwtToken);
        const originalsMoviesList = await store.moviesStore.getOriginalsMoviesList(jwtToken);

        let randomMovieData = originalsMoviesList[Math.floor(Math.random() * originalsMoviesList.length)];

        this.setState({
            originalsMoviesList : originalsMoviesList,
            trendingMoviesList : trendingMoviesList,
            shouldShowLoader : false,
            randomMovieData : randomMovieData
        });
        console.log(this.state)
    }

    componentDidMount(): void {
        this.getMoviesData();
    }

    render(){

        const {trendingMoviesList, originalsMoviesList, shouldShowLoader} = this.state;

        if (shouldShowLoader){
            return <Loader />
        }

        return(
            <div>
                <Header/>
                <MainMovieCard movieData={this.state.randomMovieData} />
            </div>
        )
    }
}

Home.contextType = StoreContext;

export default Home;