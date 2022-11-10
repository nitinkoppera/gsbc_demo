import React,{useState} from 'react';
import { IoMdCall } from 'react-icons/io';
import { FaDirections } from 'react-icons/fa'
import Link from 'next/link';
import logo_name from '../public/images/logo_name.png'
import logo_img from '../public/images/logo_img.png'
import Image from 'next/image';

function HeaderCompNew({shouldVisible}) {
    
    const [ sideNavWidth,setSideNavWidth ] = useState("0px");
    const [ sideNavpadd,setSideNavpadd ] = useState(" 20px 0px 40px 0px ")

    const headerElements = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About us',
            link: '/about'
        },
        {
            title: 'Gallery',
            link: '/gallery'
        },
        {
            title: 'Achievements',
            link: '/achievements'
        },
        {
            title: 'Donate',
            link: '/whakapapafoundation/support'
        },
        {
            title: 'Contact us',
            link: '/contact-us'
        },
    ]

    return (
        <div className=''>
            <div className="sidenav" style={{display:"block",width:sideNavWidth,padding:sideNavpadd}}>
                <div className="closebtn-div">
                    <span className="closebtn" onClick={() =>{ setSideNavWidth("0px");setSideNavpadd(" 20px 0px 40px 0px ") }}>&times;</span>
                </div>
                <li>
                    <Link href="/whakapapafoundation/support">
                        <span className="element" style={{display:"flex",justifyContent:"center",alignContent:"center",fontWeight:'400',fontSize:'18px'}}>
                            {/* <span style={{paddingRight:"5px"}}><FaDirections style={{width:"20px", height:"20px",alignSelf:"center"}}/></span> */}
                            <span>Donate</span>
                        </span>
                    </Link> 
                </li>
                <li><a href="tel:+91-80721-76232">
                    <span className="element" style={{display:"flex",alignContent:"center"}}>
                        <span style={{paddingRight:"5px"}}><IoMdCall style={{width:"20px", height:"20px",alignSelf:"center"}}/></span>
                        <span>Call Now</span>
                    </span>
                </a></li>
                <li><a href="https://goo.gl/maps/b4PMSYJ518D9r66e6">
                    <span style={{display:"flex",alignContent:"center"}}>
                        <span style={{paddingRight:"5px"}}><FaDirections style={{width:"20px", height:"20px",alignSelf:"center"}}/></span>
                        <span>Get Directions</span>
                    </span>
                </a></li>

            </div>
            <div className="header bg-black ">
                <div className="menu-btn-div">
                    <span onClick={() =>{ setSideNavWidth("200px");setSideNavpadd(" 20px 20px 40px 40px ") }}>
                        <svg fill="rgb(7, 53, 7)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
                    </span>
                </div>

                <div className="header-left logo-div">
                    <div className='h-10'>
                        <img
                            className='h-full '
                            src='./images/logo_img.png'
                            alt='img'

                        />
                    </div>
                    <div className='h-8 pl-2'>
                        <img
                            className='h-full '
                            src='./images/logo_name.png'
                            alt='img'

                        />
                    </div>
                </div>
                <div className="header-middle"></div>
                <div className="header-right">
                    {shouldVisible && headerElements.map((element,i) => {
                        return <div key={i} className="element-div">
                            <Link href={element.link} passHref>
                                <span className="element" style={{display:"flex",justifyContent:"center",alignContent:"center",fontWeight:'400',fontSize:'16px'}}>
                                    <span>{element.title}</span>
                                </span>
                            </Link> 
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default HeaderCompNew;