import { Component } from "react";
import { StoreContext } from "../../context/storeContext";
import Loader from "../../components/loader";
import { HomeState } from "../../types/home";
import MainMovieCard from "../../components/mainMovieCard";
import TrendingMovies from "../../components/trendingMoviesComponent";
import OriginalsMoviesComponent from "../../components/originalMoviesComponent";



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
            <div style={{backgroundColor: "black", minHeight: "100vh",maxWidth: "100vw", overflow: "none"}}>
                <MainMovieCard movieData={this.state.randomMovieData} />
                <div style={{padding : "60px 0"}}>
                    <TrendingMovies list={trendingMoviesList} />
                    <br />
                    <br />
                    <br />
                    <OriginalsMoviesComponent list={originalsMoviesList} />
                </div>
            </div>
        )
    }
}

Home.contextType = StoreContext;

export default Home;