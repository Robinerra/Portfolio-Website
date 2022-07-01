//Copyright Elise Willar 2022 for elisewillar.com
//1st of July 2022
import React, { useState } from "react";
import CarouselButton from "./carouselButton";
import Skills from './slides/skills'
import Projects from './slides/projects'
import AboutMe from "./slides/aboutMe";
import style from '../styles/components/carousel.module.css'

function Carousel() {
  //State where the current slide is stored
  const [slide, setSlide] = useState<number>(0);

  //Would've loved to call the carousel slides/buttons their actual names but
  //numbers are so much easier to work with.
  //0 = about me, 1 = skills, 2 = projects.

  //The way this whole thing works is pretty neat, it works like thiis:  ("|  |" being the current viewport and [I] being the slide):
  //            |[0]|  [1]  [2]
  //       [0]  |[1]|  [2]
  //  [0]  [1]  |[2]|
  //So the inner div essentially has a size of 300% viewport width, and every slide a width of 100%,
  //and we're shifting it by -100% or 100% to bring the different slides into the viewport, this all works with CSS transform & translate,
  //the only JS is just the button handling.
  return (
    <>
      <div id="buttonContainer">
        <CarouselButton
          id={0} name="About" setSlide={setSlide} slide={slide} />
        <CarouselButton
          id={1}
          name="Skills"
          setSlide={setSlide}
          slide={slide}
        />
        <CarouselButton
          id={2}
          name="Projects"
          setSlide={setSlide}
          slide={slide}
        />
      </div>
      <div id={style.slideContainer}>
        <div
          id={style.slideInner}
          style={{ transform: `translateX(-${slide * 100}%)` }}>
          <div id={style.slide0} className={style.slide} tabIndex={1}>

            <AboutMe />

          </div>
          <div id={style.slide1} className={style.slide} tabIndex={2}>

            <Skills />

          </div >
          <div id={style.slide2} className={style.slide} tabIndex={3}>
            <Projects />
          </div>
        </div >
      </div >
    </>
  );
}

export default Carousel;
