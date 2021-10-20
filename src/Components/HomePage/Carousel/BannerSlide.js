import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerSlide = () => {
    
    
    
      const sliders=[
          {
            "id": 1,
            "title":"Dantal Hydraulics Private Limited",
            "img":"https://i.ibb.co/k0tkH4Z/home-bg1.png",
            "des":"The company also has in house capability of design, development & manufacturing of custom built car parking solutions."
          },
          {
            "id": 2,
            "title":"Oral Health Overview",
            "img":"https://i.ibb.co/BZrgRLf/home-bg2.jpg",
            "des":"Good dental or oral care is important to maintaining healthy teeth, gums and tongue."
          },
          {
            "id": 3,
            "title":"Welcome our dantal Health Care Plan",
            "img":"https://i.ibb.co/5rV68kR/home-bg3.png",
            "des":" To keep your teeth and mouth healthy for a lifetime of use, there are steps that you should follow."
          }
      ]
    return (
        <div className="slidersec">
            <Carousel fade>
                {
                    sliders.map(slider=><Carousel.Item key={slider.id}>
                            <div className="image">
                            <img
                            className="d-block w-100"
                            src={slider.img}
                            alt="First slide"
                            />
                            </div>
                            <Carousel.Caption className="text-white carouselcapton">
                            <h1 className="display-4 fw-bolder">{slider.title}</h1>
                            <h5 className="px-5">{slider.des}</h5>
                            <button className="btn btn-success fs-5">Get Started</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
             </Carousel>
        </div>
    );
};

export default BannerSlide;