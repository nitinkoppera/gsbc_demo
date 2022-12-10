import '../styles/globals.css'
import Head from 'next/head'
import FooterComp from '../components/FooterComp'
// import HeaderComp from '../components/HeaderComp'
import HeaderCompNew from '../components/HeaderCompNew'

import '../styles/index_new.css'
import '../styles/aboutus_page.css'
import '../styles/aboutUs.css'
import '../styles/achievement.css'
import '../styles/gallery.css'
import '../styles/header.css'
import '../styles/style-slideshow.css'
import '../styles/supportUs.css'
import { useState } from 'react'



function MyApp({ Component, pageProps }) {
	const [elementsVisible,setElementsVisible] = useState(true);
	const [headerVisible,setHeaderVisible] = useState(true);
	return <>
		<Head>
			<title>GS Boxing Club</title>
			<link rel="icon" href="./images/logo_img.png"></link>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		{headerVisible&&<HeaderCompNew elementsVisible={elementsVisible}/>}
		<div style={headerVisible?{paddingTop:'65px'}:{}}>
			<Component {...pageProps} 
				setElementsVisible={(d) => setElementsVisible(d)} 
				setHeaderVisible={(d) => setHeaderVisible(d)} 
			/>
		</div>
		{headerVisible&&<FooterComp />}
	</>
}
export default MyApp;
