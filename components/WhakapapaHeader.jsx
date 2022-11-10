import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import { IoMdCall } from 'react-icons/io';
import { FaDirections } from 'react-icons/fa';
import logo_name from '../public/images/logo_name.png';
import logo_img from '../public/images/logo_img.png';

function WhakapapaHeader({}) {

    const [ sideNavWidth,setSideNavWidth ] = useState("0px");
    const [ sideNavpadd,setSideNavpadd ] = useState(" 20px 0px 40px 0px ")

    const viewportDiv = (i) => {
        // if(isVisible[i]){
        //     return 'element element-active'
        // }
        return 'element'
    }

    return (
        <div className='header-container' style={{
            position:"relative",
            backgroundColor:'white !important',
            display:"none",//removing header in donate page
            }}>
            <div className="sidenav" style={{display:"block",width:sideNavWidth,padding:sideNavpadd}}>
                <div className="closebtn-div">
                    <span className="closebtn" onClick={() =>{ setSideNavWidth("0px");setSideNavpadd(" 20px 0px 40px 0px ") }}>&times;</span>
                </div>
                <li><a href="">
                    <span className={viewportDiv(1)} style={{display:"flex",alignContent:"center"}}>
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
            <div className="header" style={{backgroundColor: 'white'}} >
                <div className="menu-btn-div">
                    <span onClick={() =>{ setSideNavWidth("200px");setSideNavpadd(" 20px 20px 40px 40px ") }}>
                        <svg fill="rgb(7, 53, 7)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
                    </span>
                </div>

                <div className="header-left ">
                    <div className='logo-div'>
                        {/* <img src="/images/whakapapa-logo.jpeg" style={{height: '40px',width: '45.95744705200195px'}} alt="" /> */}
                        <img src="/images/whakapapa-logo.png" style={{height: '29.787233352661133px',width: '118.00326538085938px'}} alt="" />
                    </div>

                </div>
                <div className="header-middle"></div>
                <div className="header-right">
                </div>
            </div>
        </div>
    );
}

export default WhakapapaHeader;