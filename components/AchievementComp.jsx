import React, { useEffect, useRef, useState } from "react";
import images1 from '../public/ImageAchievement';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5'

const images = [...images1]
function AchievementComp({intersectionRef}) {
    const [index, setIndex] = useState(3);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const getClassname = (i) => {
        if(i === index){
            return 'achievement achievement-active'
        }
        return 'achievement '
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
    const [clientX,setClientX] = useState(0);
    const [touchStart,setTouchStart] = useState(0)
    const handleTouchMove = (event) => {
        setClientX(event.touches[0].clientX)
    }
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    }
    const handleTouchEnd = () => {
        if(index===1 ||  index === 3 + images.length + 1) return
        // console.log('touchStart');
        // console.log(touchStart);
        // console.log('touchEnd');
        // console.log(clientX);
        if(clientX-touchStart > 100){
            // console.log('left');
            setIndex( index === 0 ? (newImages.length-2) : (index-1)%(newImages.length));
        }
        else if(clientX-touchStart < -100){
            // console.log('right');
            setIndex( index === newImages.length-1 ? (0) : (index+1)%(newImages.length));
        }
    }








// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

    const [ modalVisible, setModalVisible ] = useState(-1)
    const modalVisibility = (i) => {
        // console.log('i');
        // console.log(i);
        if(modalVisible === i){
            // console.log('+++++++++++++++++++++++++++++++++++++++++++++');
            return 'achievement-modal-div'
        }
        return 'achievement-modal-div hide-div'
    }
    const [modalDisplay, setModalDisplay] = useState('none')

    const useOutsideClick = (ref1,ref2,ref3,ref4, callback) => {
        const handleClick = e => {
            if(modalDisplay === 'none') return
            if (ref1.current && 
                !ref1.current.contains(e.target)
                //  && !ref2.current.contains(e.target)
                //  && !ref3.current.contains(e.target)
                //  && !ref4.current.contains(e.target)
                ) {
                    // console.log('ref.current');
                    // console.log(ref1.current);
                    // console.log('ref.current.contains(e.target)');
                    // console.log(ref1.current.contains);
                    // console.log('e.target');
                    // console.log((e.target));
            callback();
          }
        };
      
        useEffect(() => {
          document.addEventListener("click", handleClick, { capture: true });
      
          return () => {
            document.removeEventListener("click", handleClick, { capture: true });
          };
        });
    };  
    
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    useOutsideClick(ref1,ref2,ref3,ref4, () => {
        // alert('You clicked outside')
      });


    return (
        <div>
            <div id="achievement" className="achievementshow" ref={intersectionRef} >
                <div className="achievementshow-heading">
                    <span>Achievements</span>
                </div>
                <div className="achievement-div">
                    <div className="achievementshowSlider" 
                        onTouchMove={(event) => handleTouchMove(event)} 
                        onTouchStart={(event) => handleTouchStart(event)} 
                        onTouchEnd={() => handleTouchEnd()} 
                        style={{
                            transform: `translate3d(${-(index) * 350}px, 0, 0)`,
                            transition: transitionTime
                        }}>
                        {newImages.map((item) => (
                            <div className={getClassname(item.id)} key={item.id}
                                style={{
                                    transition: transitionTime
                                    }} >
                                <div className="achievement-element" 
                                    onClick={() => {
                                            setModalVisible(item.id)
                                            setModalDisplay('block')
                                            // console.log(`clicked! ${item.id} ${modalVisible}`)
                                    }}
                                    style={{
                                        cursor: 'pointer',
                                        }} 
                                >
                                    <div className="achievement-element-img">
                                        <img src={item.src}  alt={item.alt} />
                                    </div>
                                    <div className="achievement-element-caption">
                                        <span>{item.caption}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ach-arrow-section">
                    <div className="ach-left-arrow-div">
                        <button className="ach-left-arrow" disabled={index===1 ? true:false} onClick={() => {
                            setIndex( index === 0 ? (newImages.length-2) : (index-1)%(newImages.length));
                        }}><IoIosArrowBack style={{ fill: 'white'}} /></button>
                    </div>
                    <div className="ach-right-arrow-div">
                        <button className="ach-right-arrow" disabled={ index === 3 + images.length + 1 ? true:false} 
                            onClick={() => {
                                setIndex( index === newImages.length-1 ? (0) : (index+1)%(newImages.length));
                        }}><IoIosArrowForward style={{ fill: 'white'}} /></button>
                    </div>
                </div>
                {/* <h1>{index%(newImages.length-3)}</h1>
                <h1>{clientX}</h1> */}
            </div>
            <div className="achievement-modal-container" 
                // onClick={() => console.log(`modalVisible = ${modalVisible}`)}
                style={{
                    height: size.height,
                    width: size.width,
                    display: modalDisplay,
                }}>
                <div className="achievement-modal-close">
                    <IoCloseSharp size='50px' style={{ fill: 'white'}} onClick={() => setModalDisplay('none')} />
                </div>
                <div className="achievement-modal-element-div" ref={ref1} >
                    {newImages.map((item) => (
                        <div className={modalVisibility(item.id)} key={item.id} style={{
                            transition: transitionTime,
                            }} >
                            <div className="achievement-modal-element" style={{
                                // transition: transitionTime,
                                // border:'10px solid red'
                            }}>
                                <div className="achievement-modal-element-caption">
                                    <span>{item.caption}</span>
                                </div>
                                <div ref={ref2} className="achievement-modal-element-img">
                                    <img src={item.src}  alt={item.alt} />
                                </div>
                                <div className="achievement-modal-arrow-section">
                                    <div ref={ref3} className="achievement-modal-left-arrow-div">
                                        <button className="achievement-modal-left-arrow" 
                                            onClick={() => { setModalVisible(prev=>(prev-1+images1.length)%images1.length) }}
                                        ><IoIosArrowBack style={{ fill: 'white',height:'50px',width:'50px'}} /></button>
                                    </div>
                                    <div ref={ref4} className="achievement-modal-right-arrow-div">
                                        <button className="achievement-modal-right-arrow" 
                                            onClick={() => setModalVisible(prev=>(prev+1)%images1.length)}
                                        ><IoIosArrowForward style={{ fill: 'white',height:'50px',width:'50px'}} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AchievementComp;