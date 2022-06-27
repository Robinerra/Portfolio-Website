//Copyright Elise Willar 2022 for elisewillar.com
//19th of June 2022
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import selfPhoto from '../public/images/self2.webp'
import Quote from '../components/quote'
import Carousel from '../components/carousel'
import CopyrightNotice from '../components/copyrightNotice'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Elise Willar - Portfolio</title>
        <meta name="description" content="Portfolio of Elise Willar, Software Engineer & Web Developer." />
        <meta name="keywords" content="Elise Willar, Portfolio, Software Engineer, Web Developer, Programmer, Willar, Elise, Ellie Willar, Ellie" />
        <meta name="author" content="Elise Willar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div id="title">
        <h1 id='titleName'>
          <span className='titleNameSmall'>I&apos;m</span><span className="titleNameGradient"> Elise Willar</span> 
          <span className='titleNameSmall'>.</span>
        </h1>
        <h2 id='titleSubtext'>Software Engineer & Web Developer.</h2>
      </div>

      <Image id="selfPhoto" src={selfPhoto} height="160px" alt="Photo of Elise Willar" width="160px"/>

      <Quote quote="Good design is as little design as possible." cite="motherfuckingwebsite.com" />

      <Carousel />

      <CopyrightNotice />
    </div>
  )
}

export default Home
