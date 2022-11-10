import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import images1 from '../public/ImageSlideshow';


function Aboutus(props) {
    const ref = useRef()
    
    return (
        <div ref={ref} className='aboutus-page'>
            <div className='aboutus-container-1'>
                <div className='aboutus-img-div grid grid-cols-2 gap-1 p-1'>
                    <div className='flex justify-center items-center overflow-hidden'><img src={images1[1].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><img src={images1[2].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><img src={images1[3].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><img src={images1[4].src} alt="" /></div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span>ABOUT GS BOXING CLUB</span>
                </div>
                <div className='aboutus-content'>
                    <div className='w-full pt-7'>
                        GS Boxing Club is a slum based boxing club located in Chintadripet, Chennai which has been operational since 2017. The club is dedicated towards teaching amateur boxing to kids from nearby slums with minimal fees. There are around 35 students aged between 7 and 22 years old training regularly at the club. The classes happen everyday between 5 to 8 both in the morning and the evening where the kids are trained to improve their physical fitness, boxing skills and mental strength. The kids contribute a minimal fee of ₹750 per month which goes towards the maintenance of the club. However, based on the financial situation of the kid, the fee is further discounted partially or completely. Besides the boxing lessons, the coach also guides the kids towards leading a disciplined life. The kids are strictly advised to use their boxing skills only within the boxing ring and are barred from the club if found otherwise. 
                    </div>
                    <div className='w-full pt-7'>
                        With the help of the local government, the club is currently operating from a Corporation Gym located in the middle of Cox Conlony TNHB Complex bordering the Cooum river in Chintadripet, Chennai. We use the nearby May Day park for our running related workouts. There is also a storeroom and a toilet in the gym. Basic equipment for boxing like punching bags, gloves, makeshift 16’x16’ boxing ring, tyres, sledgehammers, cones, weights, speed ball, etc are now available in the club thanks to various fundraising efforts. Some of the training equipment used are custom fabricated for cheap cost like the punching bag setup made of tires.
                    </div>
                    <div className='w-full pt-7'>
                    <b>Club location</b> : 
                    Address : 
                    <i>GS Boxing Club, Cox Colony, 
                        Dy Mayor Ramanathan Salai, Chintadripet, 
                        Chennai, Tamil Nadu, India - 600002
                    </i>
                    <div className='my-5' style={{border:`2px solid grey`,height:'30vw'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.5790832859528!2d80.2693272!3d13.0791273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5cb67aa5890e4d9b!2sGS%20Boxing%20Club!5e0!3m2!1sen!2sin!4v1643463817434!5m2!1sen!2sin"
                            title='Location'
                            width="100%" 
                            height="100%" 
                            style={{border:0}}
                            allowFullScreen="" 
                            loading="lazy"></iframe>
                    </div>
                

                    </div>
                </div>
            </div>
            <Head>
                <title>About GSBC</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default Aboutus;