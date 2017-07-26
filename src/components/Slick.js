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
                    <div className="slick-image"><img src="/images/ferrari.jpg" alt=""/></div>
                    {/*<div className="slick-image"><img src="/images1/chevy-delux-coupe.jpg" /></div>*/}
                    {/*<div className="slick-image"><img src="/images1/harley.jpg" /></div>*/}
                    <div className="slick-image"><img src="/images/lamb.jpg" alt=""/></div>
                    <div className="slick-image"><img src="/images/train.jpg" alt=""/></div>
                    <div className="slick-image"><img src="/images/train1.jpg" alt=""/></div>
                    <div className="slick-image"><img src="/images/schooner.jpg" alt=""/></div>
                    <div className="slick-image"><img src="/images/fordFalcon.jpg" alt=""/></div>
                </Slider>
            </div>


        )
    }
}

export default Slick;

