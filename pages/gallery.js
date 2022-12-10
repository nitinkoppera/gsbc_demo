import Head from 'next/head';
import React from 'react';
import { useRef } from 'react';
import images1 from '../public/ImageSlideshow';

function gallery(props) {
    const photos = [
        {
            url: images1[0].src
        },
        {
            url: images1[1].src
        },
        {
            url: images1[2].src
        },
        {
            url: images1[3].src
        },
        {
            url: images1[4].src
        },
        {
            url: images1[5].src
        },
        {
            url: images1[6].src
        },
        {
            url: images1[7].src
        },
    ]

    return (
        <div style={{padding:'10vh 10vw'}}>
            <div className='flex justify-start flex-wrap'>
                {photos.map((photo,i) =>
                    <img key={i} className='h-36' src={photo.url} />
                )}
            </div>
        </div>
    );
}

export default gallery;