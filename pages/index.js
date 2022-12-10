import Head from 'next/head'
import Image from 'next/image'
import FooterComp from '../components/FooterComp'
import HeaderCompNew from '../components/HeaderCompNew'
import MainComp from '../components/MainComp'
import ContactComp from '../components/ContactComp'
import SliderComponent from '../components/SliderComponent'
import GalleryComp from '../components/GalleryComp'
import AchievementComp from '../components/AchievementComp'

export default function Home({}) {
  return (
    <div>
      {/* <HeaderCompNew/> */}
      {/* <MainComp/> */}
      {/* <SliderComponent />
      <GalleryComp />
      <AchievementComp /> */}
      <ContactComp/>
      {/* <FooterComp/> */}
      
    </div>
  )
}