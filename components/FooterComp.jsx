import React from 'react';
import Image from 'next/image';


function FooterComp({props}) {

    const footerLinks = [
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
        {
            title: "Link whatever it is",
            url: "#home"
        },
    ]
    const socialLinks= [
        {
            link: "https://m.facebook.com/GS-Boxing-Club-Chennai-310017482948210/",
            svg: "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z" 
        },
        {
            link:  "https://www.instagram.com/g.s.boxing_club/",
            svg: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" 
        },
        {
            link:  "https://www.youtube.com/channel/UCvwtFYidq-PQEQdy4NFC4EA",
            svg: "M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z" 
        },
        {
            link:  "https://www.youtube.com/channel/UCvwtFYidq-PQEQdy4NFC4EA",
            svg: "M 5 3 C 3.897 3 3 3.897 3 5 L 3 19 C 3 20.103 3.897 21 5 21 L 19 21 C 20.103 21 21 20.103 21 19 L 21 5 C 21 3.897 20.103 3 19 3 L 5 3 z M 5 5 L 19 5 L 19.001953 19 L 5 19 L 5 5 z M 14.566406 7.1132812 C 13.194406 7.1132812 12.080078 8.2286094 12.080078 9.5996094 C 12.080078 9.8566094 12.166016 10.028219 12.166016 10.199219 C 10.109016 10.114219 8.309375 9.0859063 7.109375 7.6289062 C 6.852375 7.9719062 6.765625 8.399125 6.765625 8.828125 C 6.765625 9.685125 7.1948594 10.372656 7.8808594 10.972656 C 7.4528594 10.886656 7.108625 10.799906 6.765625 10.628906 C 6.765625 11.828906 7.6223281 12.772297 8.7363281 13.029297 C 8.4793281 13.115297 8.3077812 13.115234 8.0507812 13.115234 C 7.9647813 13.115234 7.7920938 13.029297 7.6210938 13.029297 C 7.9640937 13.972297 8.8215469 14.742188 9.9355469 14.742188 C 9.0785469 15.342187 7.9636094 15.771484 6.8496094 15.771484 L 6.25 15.771484 C 7.364 16.456484 8.6504844 16.886719 10.021484 16.886719 C 14.564484 16.886719 17.050781 13.114422 17.050781 9.8574219 L 17.050781 9.5136719 C 17.479781 9.1706719 17.906953 8.7425625 18.251953 8.2265625 C 17.737953 8.4845625 17.308922 8.57025 16.794922 8.65625 C 17.308922 8.31425 17.737203 7.8851562 17.908203 7.2851562 C 17.479203 7.5421562 16.965234 7.7987656 16.365234 7.8847656 C 15.936234 7.3707656 15.252406 7.1132812 14.566406 7.1132812 z" 
        },
    ]
    const blue_shade = "#0047ab";

    // const blue_shade = "rgb(7, 53, 7)"
    
    return (
        <div className="footer border-t-2 border-black bg-white">
            <div className="footer-container mobile:h-fit">
                {/* both  */}
                {/* logos */}
                <div className='h-full  w-2/8'>
                    <div className='h-10 mobile:h-7 m-2'>
                        <img className='h-full' src='/images/logo_img.png' alt='img' />
                    </div>
                    <div className='h-10 mobile:h-7 m-2'>
                        <img className='h-full' src='/images/whakapapa-logo.png' alt='img' />
                    </div>
                </div>
                {/* desktop */}
                {/* footer links */}
                <div className="other-links-div flex flex-1 mobile:hidden" style={{minHeight:'200px'}}>
                    {footerLinks.map( (link,i) => (
                        <div key={i} className="other">
                            <a className=' text-black' href={link.url} target="_blank" rel='noreferrer'><span>{link.title}</span></a>
                        </div>
                    ) )}
                </div>
                {/* both */}
                {/* social links */}
                <div className="social-links-div w-2/5 mobile:w-fit ">
                    <div className='pb-4'>
                        <div className='flex'>
                            <input className='h-7 text-black px-2 align-middle bg-white border border-black' placeholder='Enter email' />
                            <button className='h-7 text-black px-2 align-middle border border-black'>Submit</button>
                        </div>
                    </div>
                    <div className='flex justify-center mobile:hidden'>
                        {socialLinks.map((social,i) => <div key={i} className="social">
                            <a href={social.link} target="_blank" rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 24 24" style= {{fill:blue_shade}}>
                                    <path d={social.svg}></path>
                                </svg>
                            </a>
                        </div>)}
                    </div>
                </div>
                {/* mobile */}
                {/* footer links */}
                <div className='hidden mobile:flex flex-col w-full'>
                    <div className="other-links-div flex middle:flex-row justify-around " style={{minHeight:'300px'}}>
                        {footerLinks.map( (link,i) => (
                            <div key={i} className="other text-black">
                                <a className=' text-black' href={link.url} target="_blank" rel='noreferrer'><span>{link.title}</span></a>
                            </div>
                        ) )}
                    </div>
                    <div className='flex justify-center  w-full'>
                        {socialLinks.map((social,i) => <div key={i} className="social">
                            <a href={social.link} target="_blank" rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 24 24" style= {{fill:blue_shade}}>
                                    <path d={social.svg}></path>
                                </svg>
                            </a>
                        </div>)}
                    </div>
                </div>

            </div>
            <div className="copy-rights text-black">
                <span>G.S. Bloxing Club © 2022</span>
            </div>
        </div>
    );
}

export default FooterComp;