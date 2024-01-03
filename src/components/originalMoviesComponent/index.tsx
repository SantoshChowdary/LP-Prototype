import { Component } from "react";
import { sliderSettings } from "../trendingMoviesComponent";
import Slider from "react-slick";
import MovieCard from "../movieCard";

class OriginalsMoviesComponent extends Component<any> {
    render() {

        const {list} = this.props;

        return (
            <div style={{padding : "0 60px"}}>
                <p style={{color : "white"}}><strong>Originals</strong></p>
                <Slider {...sliderSettings} >
                    {
                      list.map((movie : any) => (
                          <MovieCard movieData={movie} key={movie.id} />
                      ))
                    }
                </Slider>
            </div>
        )
    }
}

export default OriginalsMoviesComponent;