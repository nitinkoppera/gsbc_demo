import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import images1 from '../public/ImageSlideshow';


function OurActivity(props) {
    const ref = useRef()

    const activities = [
        {
            heading: 'Coaching and Sports Career Management',
            content: "By supporting the day to day activities of GS Boxing Club we ensure that continuous quality training is given and each kid's progress is closely monitored, course correcting it when required and updating the training routine regularly with latest training methods.",
            img1: './images/our-activity/Coaching/coaching.jpg',
            img2: '',
        },
        {
            heading: 'Tournament Sponsorship',
            content: "As these kids are from poor backgrounds, spending for their tournaments becomes a financial burden to their parents. Therefore, it is important to financially support them so that they can realise their full potential without poverty being an obstacle. Hence we cover all the expenses incurred towards their tournament participation. This includes their food, travel, accommodation, entry fees, medical and equipment expenses.",
            img1: './images/our-activity/Tournament/3.jpg',
            img2: '',
        },
        {
            heading: 'Equipments and Infrastructure',
            content: "We ensure that the equipment and infrastructure needs are met adequately to provide continuous quality training to the kids. The impact absorbing equipments like the gloves, punching bags, head gear and punching pads get worn out over time are regularly replaced every 3 months. We try our best to upgrade our equipment to improve the training quality.",
            img1: './images/our-activity/Equipments and Infrastructure/1.jpg',
            img2: '',
        },
        {
            heading: 'Nutrition',
            content: "Kids who are preparing to participate in the State and National level tournaments require nutritional supplements to support their training. This helps prepare their body to a competing level. We are currently looking for funds and sponsorship to help the kids get sufficient nutrition.",
            img1: './images/our-activity/Nutrition/1.jpg',
            img2: '',
        },
        {
            heading: 'Tuition',
            content: "We support the tuition expenses of the kids preparing for their 10th and 12th standard board exams. This would help reduce the financial burden on their parents while helping the kids focus better on their academics.",
            img1: './images/our-activity/Tuition/1.jpg',
            img2: '',
        },
        {
            heading: 'Recreational Activities',
            content: "Occasionally we organise short recreational trips and impromptu fun events to help the kids cool off and build a bond with each other. The kids involve in friendly games, activities, singing and dancing, etc. Value based talks and conversations also take place during these events.",
            img1: './images/our-activity/Recreational Activities/1.jpg',
            img2: '',
        },
    ]
    
    return (
        <div ref={ref} className='aboutus-page'>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span className='text-5xl mobile:text-4xl'>Our Activity</span>
                </div>
            </div>
            {activities.map((activity,i) =><div key={i} className='aboutus-container-2'>
                <div className='aboutus-sub-heading'>
                    <span>{activity.heading}</span>
                </div>
                <div className='w-full pt-2'>
                {activity.content}
                </div>
                <div className='flex justify-center items-center mobile:flex-col'>
                    {activity.img1&&<div className='h-60 px-3 overflow-hidden'>
                        <img className='object-cover border h-full' src={activity.img1} alt='img' />
                    </div>}
                    {activity.img2&&<div className='h-60 px-3 overflow-hidden'>
                        <img className='object-cover border h-full' src={activity.img2} alt='img' />
                    </div>}
                </div>
            </div>)}
            <Head>
                <title>Our Activity</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default OurActivity;