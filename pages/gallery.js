import Head from 'next/head';
import React from 'react';
import { useRef } from 'react';
import images from '../public/images/gallery';

function gallery(props) {
    const photos = [
        {
            url: images[0].src
        },
        {
            url: images[1].src
        },
        {
            url: images[2].src
        },
        {
            url: images[3].src
        },
        {
            url: images[4].src
        },
        {
            url: images[5].src
        },
        {
            url: images[6].src
        },
        {
            url: images[7].src
        },
    ]

    return (
        <div style={{padding:'10vh 10vw'}}>
            <div className='flex justify-start flex-wrap'>
                {images.map((photo,i) =>
                    <img key={i} className='h-36' src={photo.src} />
                )}
            </div>
        </div>
    );
}

export default gallery;