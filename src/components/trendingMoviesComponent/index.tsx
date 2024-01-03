import { Component } from "react";
import Slider from 'react-slick';
import MovieCard from "../movieCard";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  // centerMode : true,
  // accessibility : true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // centerMode: true,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        // centerMode: true
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // centerMode: true
      },
    }
  ],
}



class TrendingMovies extends Component<any> {
    render() {

        const {list} = this.props;

        return (
            <div style={{padding : "0 60px"}}>
                <p style={{color : "white"}}><strong>Trending Now</strong></p>
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

export default TrendingMovies;