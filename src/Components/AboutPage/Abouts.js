import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Abouts = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src="https://i.ibb.co/Jk73xBJ/about1.jpg" onDragStart={handleDragStart} alt="" />,
        <img src="https://i.ibb.co/HBHYN0q/about2.jpg" onDragStart={handleDragStart} alt="" />,
        <img src="https://i.ibb.co/r48KnvM/about3.jpg" onDragStart={handleDragStart} alt="" />,
        <img src="https://i.ibb.co/j8nW62d/about4.jpg" onDragStart={handleDragStart} alt="" />,
        <img src="https://i.ibb.co/261CVgv/about5.jpg" onDragStart={handleDragStart} alt="" />,
      ];
      
    return (
        <div className="container py-5 border-bottom">
            <div className="row">
            <h1 className="text-center text-success pb-4">About Our Health Care</h1>
            <p className="pb-3 px-5">Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.</p>
            </div>
            <div className="row">
            <AliceCarousel  mouseTracking items={items } />
            </div>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Abouts;