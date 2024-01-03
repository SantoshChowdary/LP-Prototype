import { Component } from "react"
import Header from "../../components/header";
import { StoreContext } from "../../context/storeContext";
import  {PopularMoviesData} from "../../types/home";
import Loader from "../../components/loader";
import MovieCard from "../../components/movieCard";


class PopularMoviesSection extends Component<{}, PopularMoviesData> {
    constructor(props : any){
        super(props);
        this.state = {
            popularMoviesList : [],
            shouldShowLoader : true,
        }
    }

    getMoviesData = async () => {
        const store: any = this.context;
        const jwtToken = store.authStore.jwtToken;
        const popularMoviesList = await store.moviesStore.getPopularMoviesList(jwtToken);

        this.setState({
            popularMoviesList : popularMoviesList,
            shouldShowLoader : false,
        });
        console.log(this.state)
    }

    componentDidMount(): void {
        this.getMoviesData();
    }

    render() {

        if (this.state.shouldShowLoader) {
            return <Loader />
        }

        return (
            <div style={{display : "flex", flexWrap : "wrap", justifyContent : "center", backgroundColor: "black", paddingBottom: "40px"}}>
                <Header />
                {
                    this.state.popularMoviesList.map((movie : any) => (
                        <MovieCard movieData={movie} key={movie.id} />
                    ))
                }
            </div>
        )
    }
}

PopularMoviesSection.contextType = StoreContext;

export default PopularMoviesSection;