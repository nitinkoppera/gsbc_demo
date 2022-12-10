import Head from 'next/head';
import React from 'react';

function inTheNews(props) {
    const news = [
        {
            title: 'GoTN : Boxing their Way to Better Opportunities',
            url: 'https://www.gotn.in/boxing-their-way-to-better-opportunities/',
            image: 'https://www.gotn.in/wp-content/uploads/2021/12/IMG_2358-3-optimized-scaled-e1639041460685.jpg'
        },
        {
            title: 'The New Indian Express : Punching Past Poverty',
            url: 'https://www.newindianexpress.com/cities/chennai/2022/jan/04/punching-past-poverty-2402680.html',
            image: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/1/3/w900X450/Around.jpg'
        },
        {
            title: 'The New Indian Express : Fate Meets Fortune on the Field',
            url: 'https://www.newindianexpress.com/cities/chennai/2022/may/04/fate-meetsfortuneon-the-field-2449359.html',
            image: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/5/3/w900X450/Fate_meets.jpg'
        },
        {
            title: 'The New Indian Express : Three Youngsters Head to Boxing Championship 2022',
            url: 'https://www.newindianexpress.com/cities/chennai/2022/jul/02/three-youngsters-head-to-boxing-championship-2022-2471926.html',
            image: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/11/w900X450/Boxing.jpg'
        },
    ]
    return (
        <div className='aboutus-page' style={{padding:'50px 10vw 0vh 10vw'}}>
            <div className='aboutus-container-2' style={{padding:'0vh 0vw'}}>
                <div className='aboutus-heading'>
                    <span className='text-5xl mobile:text-4xl'>In the news</span>
                </div>
                <div className='grid grid-cols-3 mobile:grid-cols-1'>
                    {news.map((content,i) => <a key={i} href={content.url} style={{padding: '1vw 1vw'}}>
                        <div className='flex flex-col border border-black' style={{height:'40vh'}}>
                            <div className='flex-1 overflow-hidden bg-cover' >
                                <img className='h-full w-full' src={content.image} />
                            </div>
                            <div className='text-black' style={{height:'10vh',padding:'0.5vh 0.5vw'}}>
                                <span>{content.title}</span>
                            </div>
                        </div>
                    </a>)}
                </div>
                {/* <center>
                    <iframe src="https://drive.google.com/file/d/19IX3ryXMvgOl_8-Kuf4zmN26B6uHtz3F/preview" 
                        width="640" 
                        height="480" 
                        allow="autoplay"
                        ></iframe>
                </center> */}
                <Head>
                    <title>In the news</title>
                </Head>
            </div>
        </div>
    );
}

export default inTheNews;