import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import images1 from '../public/ImageSlideshow';


function SponsorAKid(props) {
    const ref = useRef()

    const expenses = [
        {
            type: "Coaching Expenses",
            perAnnum: "₹1,20,000",
            perMonth: "₹10,000",
            covers: "Covers their focused coaching (2 hours a session, 2 sessions a day, and 6 days a week) and career management expenses. This goes towards our coach’s salary, administrative and infrastructure expenses."
        },
        {
            type: "Equipment Expenses",
            perAnnum: "₹24,000",
            perMonth: "₹2,000",
            covers: "Covers the purchase of necessary boxing training equipment.",
        },
        {
            type: "Tournament Expenses",
            perAnnum: "₹18,000",
            perMonth: "₹1,500",
            covers: "Covers the entry fees and travel expenses to TNBA and BFI official tournaments and local inter club tournaments.",
        },
        {
            type: "Nutrition Expenses",
            perAnnum: "₹30,000",
            perMonth: "₹2,500",
            covers: "Covers their nutrition needs during their preparation for TNBA and BFI tournaments",
        },
        {
            type: "Tuition Expenses",
            perAnnum: "₹18,000",
            perMonth: "₹1,500",
            covers: "Covers their tuition expenses to ensure they have a good grip on their academics.",
        },
        {
            type: "Total Expenses",
            perAnnum: "₹2,10,000",
            perMonth: "₹17,500",
            covers: "All the above",
        },
    ]
    
    return (
        <div ref={ref} className='aboutus-page'>
            <div className='aboutus-container-1'>
                <div className='aboutus-img-div grid grid-cols-2 gap-1 p-1'>
                    <div className='flex justify-center items-center overflow-hidden'><Image src={images1[1].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><Image src={images1[2].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><Image src={images1[3].src} alt="" /></div>
                    <div className='flex justify-center items-center overflow-hidden'><Image src={images1[4].src} alt="" /></div>
                </div>
            </div>
            <div className='aboutus-container-2'>
                <div className='aboutus-heading'>
                    <span>SOPONSOR A KID</span>
                </div>
                <div className='aboutus-content'>
                    <div className='w-full pt-7'>
                    Winning medals at the State and National level official tournaments gives these kids access to the sports quota using which they could secure jobs and/or higher education opportunities. There are many instances where talented kids drop out of training due to poverty even before they could reach the Elite age category.
                    </div>
                    <div className='w-full pt-7'>As these kids are from poor backgrounds, spending for their tournaments becomes a financial burden to their parents. Therefore, it is important to financially support them so that they can realise their full potential without poverty being an obstacle.</div>
                    <div className='w-full pt-7'>By sponsoring a kid, you ensure that they receive consistent, focused, and quality training to stay on track in their sports career. Thus preparing them to have a striking chance at medals in the national and international tournaments.</div>
                    <div className='w-full pt-7'>There are about 15 kids in GS Boxing Club, who have the potential to make it big in their boxing careers. </div>
                    <div className='w-full pt-7 mb-2'>
                        <b>
                        The estimated expenses for a year to sponsor a kid are as follows:
                        </b>
                    </div>
                    <div className=' w-3/4 grid grid-cols-6 gap-0.5 p-0.5 bg-black'>
                        <div className='w-full px-3 bg-white '>
                            <span>Expense Type</span>
                        </div>
                        <div className='w-full px-3 bg-white '>
                            <span>Per Annum</span>
                        </div>
                        <div className='w-full px-3 bg-white '>
                            <span>Per Month</span>
                        </div>
                        <div className='w-full px-3 bg-white col-span-3 '>
                            <span>What it covers?</span>
                        </div>
                        {expenses.map((expense) => {
                            const divs = [];
                            divs.push(
                                <div className='w-full px-3 bg-white '>
                                    <span>{expense.type}</span>
                                </div>
                            )
                            divs.push(
                                <div className='w-full px-3 bg-white '>
                                    <span>{expense.perAnnum}</span>
                                </div>
                            )
                            divs.push(
                                <div className='w-full px-3 bg-white '>
                                    <span>{expense.perMonth}</span>
                                </div>
                            )
                            divs.push(
                                <div className='w-full px-3 bg-white col-span-3 '>
                                    <span>{expense.covers}</span>
                                </div>
                            )
                            return divs
                        })}
                    </div>
                    <div className='w-full pt-7'>
                        We request you to please <a href='/contactUs'>contact us</a> if you&apos;d like to sponsor a kid fully or partially.
                    </div>
                    <div className='w-full pt-7'>
                    {/* <a href='/whakapapafoundation/support'>Donate now</a> */}
                    <Link href='/whakapapafoundation/support'>
                    Donate now
                    </Link>
                    . 
                    {/* <a href='/contactUs'>Contact us</a> */}
                    <Link href='/contactUs'>
                    Contact us
                    </Link>
                     for supporting us through your company&apos;s CSR.
                    </div>
                    
                </div>
                
            </div>
            <Head>
                <title>Sponsor a kid</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    );
}

export default SponsorAKid;