import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import images from '../public/images/about-whakapapa';


function aboutWhakapapa(props) {
    return (
        <div>
            <div className='aboutus-container-1'>
                <div className='aboutus-img-div flex'>
                    <img className='' src={images[0].src} alt="" />
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span className='text-5xl mobile:text-4xl'>ABOUT WHAKAPAPA</span>
                </div>
                <div className='aboutus-content'>
                    <div className='w-full pt-7'>
                    Whakapapa Foundation is a Non Profit Organisation registered under Section 8 of the Companies Act 2013 and is operational since 2021. It was founded by two college friends Kharthickeyen and Abinaya who wanted to support the coach and the kids after seeing their genuine passion and need for help. 
                    </div>
                    <div className='w-full pt-7'>
                    The name <b>Whakapapa</b> is borrowed from the Māori culture where it is defined as the genealogical descent of all living things from the creation of the universe to the present time. It is a fundamental principle in Maori culture where one recites their Whakapapa to proclaim their ancestry and connect themselves with their roots while placing themself in a wider context, linking themself back to the land, sea, sky and universe. Whakapapa resonated with our values as it essentially means to appreciate one&apos;s roots while understanding that we are all the same sharing our ancestry to nature and the universe.
                    </div>
                    <div className='w-full pt-7'>
                    We are thankful to Mr. Saud Amin Khan, the former director of Whakapapa Foundation for trusting in our cause, values, and purpose and transferring the Section 8 company to us. It helped give structure to our efforts in the form of an NGO.
                    </div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>Our Cause</span>
                </div>
                <div className='flex mobile:flex-col w-full pt-2'>
                    <div className='flex-1 w-full pt-2'>
                        Together with GS Boxing Club we are helping children from underprivileged backgrounds to get better opportunities at life through this sport of Amateur Boxing. We aim to ensure that these kids get better employment and higher education opportunities through the sports quota while leading a disciplined athlete life free from drug and alcohol abuse. Thus we empower them to earn a livelihood for themselves through a sport that they are naturally good at. We believe that such sports-based empowerment could bring a greater change in underprivileged sections of society. We further wish to take up causes that help empower people and the planet.
                    </div>
                    <div className='flex-1 aboutus-img-div flex'>
                        <img className='' src={images[1].src} alt="" />
                    </div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>Our details:</span>
                </div>
                <div className='w-full pt-2'>
                    <ul className='list-disc'>
                        <li>CIN Number :U85300UP2020NPL137141</li>
                        <li>PAN : AACCW7933M</li>
                        <li>12A Number : AACCW7933ME20211</li>
                        <li>80G Number : AACCW7933MF20227</li>
                        <li>Email : whakapapafoundation@gmail.com</li>
                        <li>Newsletters and Annual Reports (link to newsletters and annual reports)</li>
                        <li>We are registered under Niti Aayog&apos;s NGO Darpan. Our unique ID is UP/2022/0312952 (Darpan Logo)</li>
                        <li>We have been awarded the prestigious GuideStar India Transparency Key award for 2022 and have joined India&apos;s largest pool of credible NGOs after undergoing GuideStar India&apos;s due diligence process. GuideStar India&apos;s Transparency Key is the Foundation Level certification indicating that the organisation has filed annual income tax returns as a tax-exempt entity and has shared the same in the public domain. To view our profile at GuideStar India, please visit here. (Guidestar Key Image)</li>
                    </ul>

                </div>
            </div>
            <Head>
                <title>About Whakapapa</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default aboutWhakapapa;