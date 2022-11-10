import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai'


function FooterComp(props) {
    const facebook = "https://www.facebook.com/whakapapafoundation/";
    const instagram = "https://www.instagram.com/whakapapafoundation/";
    const linkedIn = "https://www.linkedin.com/company/whakapapafoundation/";

    const footerLinks = [
        // {
        //     title: "Link whatever it is",
        //     url: "#home"
        // },
        // {
        //     title: "Link whatever it is",
        //     url: "#home"
        // },
        // {
        //     title: "Link whatever it is",
        //     url: "#home"
        // },
    ]
    const blue_shade = "#0047ab";

    // const blue_shade = "rgb(7, 53, 7)"
    
    return (
        <div className="footer text-white" style={{backgroundColor:'#0047ab'}}>
            <div className="footer-container flex justify-center">
                <div className="social-links-div" style={{flexDirection:'row'}}>
                    <div className="social">
                        <a href={facebook} target="_blank" rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 24 24" style= {{fill:blue_shade}}>
                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="social">
                        <a href={instagram} target="_blank" rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 24 24" style= {{fill:blue_shade}}>
                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="social">
                        <a href={linkedIn} target="_blank" rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="34" height="34"
                            viewBox="0 0 32 32"
                            style={{fill:blue_shade}}>
                            <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copy-rights">
                <span>Whakapapa Foundation © 2022</span>
            </div>
            <div className="copy-rights">
                <span>This website is designed and created by our voluteers Nitin Koppera and Dinesh Kumar </span>
            </div>
        </div>
    );
}

export default FooterComp;