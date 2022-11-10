import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import images1 from '../public/ImageSlideshow';


function aboutcoach(props) {
    return (
        <div>
            <div className='aboutus-container-1'>
                <div className='aboutus-img-div grid grid-cols-2 gap-1 p-1'>
                    <div className='flex justify-center items-center overflow-hidden'><Image src={images1[3].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><Image src={images1[4].src} alt="" /></div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span>ABOUT COACH</span>
                </div>
                <div className='aboutus-content'>
                    <div className='w-full pt-7'>
                        Our coach, Mr. Govindaraj, is an NSNIS (Short Certificate Course) certified boxing coach and a former State gold medalist (Elite Men 2012). He has 15 years of experience in Amateur Boxing and has coached more than 200 kids. He takes care of coaching and the overall club management activities. He previously worked as loadman in the railways but now allots his full time for the boxing club.
                    </div>
                    <div className='w-full pt-7'>
                    A genuine person who always wants to help people in need, he started this boxing club to give a better future to the kids through his boxing knowledge. Through his classes he wishes to shape the young minds from underprivileged backgrounds and give them opportunities (that they would have otherwise not had access to) through the sport. He aims to nurture and produce talents at the Olympic level.
                    </div>
                    <div className='w-full pt-7'>
                    U Govindaraj BA, NSNIS (SSC)<br/>
                    <b>Contact Number</b> : <a className='text-blue-800' href='tel:+918072176232'>+91 8072176232</a>
                    </div>
                </div>
            </div>
            <Head>
                <title>About Coach</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default aboutcoach;