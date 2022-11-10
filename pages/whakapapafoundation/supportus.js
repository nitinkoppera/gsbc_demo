import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function Supportus({setIsVisible,setIsWhakapapa}) {
    useEffect(() => {
        setIsVisible([0,0,0,0])
        setIsWhakapapa(true)

    },[setIsVisible,setIsWhakapapa])
    const [ copiedVisible, setCopiedVisible ] = useState(0)
    const handleCopy = () => {
        setCopiedVisible(1)
        navigator.clipboard.writeText('whakapapa@ybl')
        setTimeout(function() {
            setCopiedVisible(0)
        }, 1000);

        
    }
    return (
        <div>
            <Head>
                <title>Whakapapa Foundation</title>
                <link rel="icon" href="/images/whakapapa-logo.png" type="image/icon type"></link>
            </Head>

            <div className='supportUs-container' >
                <div className='copied-div'>
                    <span style={{opacity:copiedVisible}}>copied to clipboard</span>
                </div>
                <div className='supportUs-div'>
                    <div className='supportUs-left'>
                        <div className='supportUs-content-div'>
                            <span style={{fontSize:'35px', paddingBottom:'30px'}}>
                                Support Us
                            </span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)', paddingBottom:'10px' }}>You can support us by making a contribution to our foundation</span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)', fontWeight:'600' }}>Bank Account information:</span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)' }}>Account Holder: WHAKAPAPA FOUNDATION</span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)' }}>Account Number: 50200062965291</span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)' }}>IFSC: HDFC0000124</span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)' }}>Branch: KILPAUK</span>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)' }}>Account Type: CURRENT</span>
                            <br/>
                            <span  style={{fontSize:'18px', color:'rgb(50, 50, 50)', cursor:'pointer' }} 
                                onClick={() => handleCopy()}>UPI ID: <span style={{color:'#0000EE'}}>whakapapa@ybl</span></span>
                        </div>
                    </div>
                    <div className='supportUs-right'>
                        <div className='supportUs-img-div'>
                            <img className='supportUs-img' src='/images/upi.jpeg' alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Supportus;