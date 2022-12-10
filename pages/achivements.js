import Head from 'next/head';
import React from 'react';
import { useRef } from 'react';
import images1 from '../public/ImageSlideshow';


function Achivements(props) {
    const ref = useRef()

    const nationals = [
        {
            imgURL: '',
            caption: "2 students aged between 17-18 represented Tamilnadu in the National Youth Men’s Boxing Championship 2022 held in Chennai, Tamilnadu. 1 student reached the Quarterfinals at the Nationals and got selected to represent Tamilnadu in the Khelo India Youth Games 2023."
        },
        {
            imgURL: '',
            caption: "1 student aged between 13-14 represented Tamilnadu in the National Sub Junior Boys’ Boxing Championship 2022 held in Bellary, Karnataka."
        },
        {
            imgURL: '',
            caption: "1 student aged between 13-14 represented Tamilnadu in the National Sub Junior Girls’ Boxing Championship 2022 held in Bellary, Karnataka."
        },
        {
            imgURL: '',
            caption: "2 students represented Tamilnadu in the National Junior Boys’ Boxing Championship 2021 held in Sonipat, Haryana. 1 student reached the Semifinals and won Bronze Medal."
        },
    ]
    const states = [
        {
            imgURL: '',
            caption: "3 students aged between 17-18 won 2 gold and 1 silver in the State Youth Men’s Boxing Championship 2022 held in Chennai, Tamilnadu"
        },
        {
            imgURL: '',
            caption: "1 student aged between 13-14 won gold in the State Sub Junior Boys’ Boxing Championship 2022 held in Pudukkottai, Tamilnadu"
        },
        {
            imgURL: '',
            caption: "1 student aged between 13-14 won gold in the State Sub Junior Girls’ Boxing Championship 2022 held in Pudukkottai, Tamilnadu"
        },
        {
            imgURL: '',
            caption: "2 students aged between 15-16 won 2 gold and 2 silver in the State Junior Boys’ Boxing Championship 2021 held in Chennai, Tamilnadu"
        },
    ]
    const SGFI = [
        {
            imgURL: '',
            caption: "1 student represented Tamilnadu in National School Games Federation Boxing Championship in the academic year 2018-2019"
        },
        {
            imgURL: '',
            caption: "1 student represented Tamilnadu in National School Games Federation Boxing Championship in the academic year 2017-2018 "
        },
    ]
    const allIndiaUniversity = [
        {
            imgURL: '',
            caption: "1 student represented Tamilnadu in All India University Boxing Championships four times in the years 2018, 2019, 2020 and 2022"
        },
    ]
    
    return (
        <div ref={ref} className='aboutus-page'>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span className='text-5xl mobile:text-4xl'>Achivements</span>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>Medals Tally in TNBA and BFI official tournaments</span>
                </div>
                <div className=' w-fit grid grid-cols-4 gap-0.5 p-0.5 bg-black'>
                    <div className='w-full px-3 bg-white '>
                        <span>Level</span>
                    </div>
                    <div className='w-full px-3 bg-white '>
                        <span>Gold</span>
                    </div>
                    <div className='w-full px-3 bg-white '>
                        <span>Silver</span>
                    </div>
                    <div className='w-full px-3 bg-white '>
                        <span>Bronze</span>
                    </div>
                    <div className='w-full px-3 bg-white '>
                        <span>National</span>
                    </div>
                    <div className='w-full px-3 bg-white text-center '>
                        <span>-</span>
                    </div>
                    <div className='w-full px-3 bg-white text-center '>
                        <span>-</span>
                    </div>
                    <div className='w-full px-3 bg-white text-center '>
                        <span>1</span>
                    </div>
                    <div className='w-full px-3 bg-white '>
                        <span>State</span>
                    </div>
                    <div className='w-full px-3 bg-white text-center '>
                        <span>6</span>
                    </div>
                    <div className='w-full px-3 bg-white text-center '>
                        <span>1</span>
                    </div>
                    <div className='w-full px-3 bg-white text-center '>
                        <span>-</span>
                    </div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>Nationals</span>
                </div>
                <ul className='list-disc'>
                {nationals.map((achivement,i) => <li key={i}><div className='w-full pt-2'>
                    {achivement.caption}
                </div></li>)}
                </ul>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>State</span>
                </div>
                <ul className='list-disc'>
                {states.map((achivement,i) => <li key={i}><div className='w-full pt-2'>
                    {achivement.caption}
                </div></li>)}
                </ul>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>SGFI</span>
                </div>
                <ul className='list-disc'>
                {SGFI.map((achivement,i) => <li key={i}><div className='w-full pt-2'>
                    {achivement.caption}
                </div></li>)}
                </ul>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>All India University</span>
                </div>
                <ul className='list-disc'>
                {allIndiaUniversity.map((achivement,i) => <li key={i}><div className='w-full pt-2'>
                    {achivement.caption}
                </div></li>)}
                </ul>
            </div>
            <Head>
                <title>Achivements</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default Achivements;