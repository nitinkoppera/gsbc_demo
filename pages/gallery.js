import Head from 'next/head';
import React from 'react';
import { useRef } from 'react';
import images from '../public/images/gallery';

function gallery(props) {

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