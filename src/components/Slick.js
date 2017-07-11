/**
 * Created by mephisto on 7/11/17.
 */
import React, {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Slick extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        }
        return (
            <div>
                <Slider{...settings}>
                    <div className="slick-image"><img src="/images1/ferrari.jpg" /></div>
                    <div className="slick-image"><img src="/images1/chevy-delux-coupe.jpg" /></div>
                    <div className="slick-image"><img src="/images1/harley.jpg" /></div>
                    <div className="slick-image"><img src="/images1/lamb.jpg" /></div>
                    <div className="slick-image"><img src="/images1/train.jpg" /></div>
                    <div className="slick-image"><img src="/images1/train1.jpg" /></div>
                    <div className="slick-image"><img src="/images1/schooner.jpg" /></div>
                    <div className="slick-image"><img src="/images1/fordFalcon.jpg" /></div>
                </Slider>
            </div>


        )
    }
}

export default Slick;

