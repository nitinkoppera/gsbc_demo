import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import images1 from '../public/ImageData';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const images = [...images1]
function GalleryComp({intersectionRef}) {
    const [index, setIndex] = useState(3);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const getClassname = (i) => {
        if(i === index){
            return 'gallery gallery-active'
        }
        return 'gallery '
    }

    const [ transitionTime, setTransitionTime ] = useState('ease 800ms');
    useEffect(() => {
        if (images.length<1) return
        const handleInfiniteScroll = () => {
            if( index === 3 + images.length + 1 )
            {
                setTransitionTime('none')
                setIndex(prevIndex => prevIndex - images.length )
            }
            if( index === 1 )
            {
                setTransitionTime('none')
                setIndex(prevIndex => prevIndex + images.length)
            }
        }
        setTimeout(function() {
            handleInfiniteScroll();
        }, 800);
        setTimeout(function() {
            setTransitionTime('ease 800ms')
        }, 50);
        return () => {
            resetTimeout();
        };
    },[index])
    const newImages1 = [...images.slice(images.length-3,images.length), ...images, ...images.slice(0,3)]
    const newImages = [...newImages1.map((img, index1) => {
        img.id = index1;
        return {...img}
    } )]
    return (
        <div id="gallery" className="galleryshow" ref={intersectionRef} >
            <div className="galleryshow-heading">
                <span>Photo gallery</span>
            </div>
            <div className="gallery-div">
                <div className="gal-arrow-section">
                    <div className="gal-left-arrow-div">
                        <button className="gal-left-arrow" disabled={index===1 ? true:false} onClick={() => {
                            setIndex( index === 0 ? (newImages.length-2) : (index-1)%(newImages.length));
                        }}><IoIosArrowBack/></button>
                    </div>
                    <div className="gal-right-arrow-div">
                        <button className="gal-right-arrow" disabled={ index === 3 + images.length + 1 ? true:false} onClick={() => {
                            setIndex( index === newImages.length-1 ? (0) : (index+1)%(newImages.length));
                        }}><IoIosArrowForward/></button>
                    </div>
                </div>
                <div className="galleryshowSlider" style={{
                    transform: `translate3d(${-(index) * 300}px, 0, 0)`,
                    transition: transitionTime
                    }}>
                    {newImages.map((item) => (
                        <div className={getClassname(item.id)} key={item.id} style={{
                            transition: transitionTime
                            }} >
                            <div className="gallery-element">
                                <Image src={item.src}  alt={item.alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                    {/* <h1>{index}</h1> */}
        </div>
    );
}

export default GalleryComp;