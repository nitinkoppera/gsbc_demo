import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import images1 from '../public/ImageSlideshow';

function CareersAndVolunteering(props) {
    return (
        <div>
            <div className='aboutus-container-1'>
                <div className='aboutus-img-div grid grid-cols-2 grid-rows-1 mobile:grid-rows-2 mobile:grid-cols-1 gap-1 p-1'>
                    <div className='flex justify-center items-center overflow-hidden'><img src={images1[3].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><img src={images1[4].src} alt="" /></div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span className='text-3xl mobile:text-2xl'>Careers:</span>
                </div>
                <div className='aboutus-content'>
                    <div className='w-full pt-0'>
                        Currently hiring for a Program Manager, email us at <span><a className='cursor-pointer'>whakapapafoundation@gmail.com</a></span> with subject “Program Manager” if you are interested.
                    </div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span className='text-3xl mobile:text-2xl'>Volunteering:</span>
                </div>
                <div className='aboutus-content'>
                    <div className='w-full pt-0'>
                    We are open to volunteers. Email us at <span><a className='cursor-pointer'>whakapapafoundation@gmail.com</a></span> with subject “Volunteering” if you are interested to volunteer with us.
                    </div>
                </div>
            </div>
            <Head>
                <title>Careers and Volunteering</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default CareersAndVolunteering;