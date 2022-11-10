import React from "react";
import Image from 'next/image';
import images from '../public/ImageData';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';


function SliderComponent({ intersectionRef }) {
    const delay = 5000;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    // function goRight() {
    //     setIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     )
    // }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow" ref={intersectionRef} >
            <div className="arrow-div">
                <button className="left-arrow" onClick={() => {
                    setIndex( index === 0 ? (images.length-1) : (index-1)%(images.length));
                }}><IoIosArrowBack/></button>
                <button className="right-arrow" onClick={() => {
                    setIndex((index+1)%(images.length));
                }}><IoIosArrowForward/></button>
            </div>
            <div className="slideshowSlider" style={{ 
                transform: `translate3d(${-index * 100}%, 0, 0)` 
                }}>
            {images.map((item) => (
                <div className="slide" key={item.id}>
                    <div className="slide-element">
                        <img src={item.src}  alt={item.alt} />
                    </div>
                </div>
            ))}
            </div>

            <div className="slideshowDots">
            {images.map((_, idx) => (
                <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                    setIndex(idx);
                }}
                ></div>
            ))}
            </div>
        </div>
    );
}

export default SliderComponent;