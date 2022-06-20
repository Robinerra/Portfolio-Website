//Copyright Elise Willar 2022 for elisewillar.com
//19th of June 2022
import React, { useState } from "react";
import CarouselButton from "./carouselButton";
import Image from "next/image";
import tauriIcon from "../public/tauriIcon.png";

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
      <div id="carouselButtonContainer">
        <CarouselButton id={0} name="About" setSlide={setSlide} slide={slide} />
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
      <div id="carouselSlideContainer">
        <div
          id="carouselSlideInner"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          <div id="carouselSlide0" className="carouselSlide">
            <div className="slideContent">
              <p>
                I&apos;m creative and have excellent problem solving skills,
                I&apos;m a quick learner and can adapt to any programming
                language or framework with ease. (except for Java)
              </p>
              <p>
                I started programming when I was 13 making Discord bots with
                javascript. That passion and love for programming has stayed
                with me to adulthood and has been a daily hobby of mine for 4 years.
              </p>
              <p>
                Computer science, Electronic engineering, Networking,
                Cybersecurity and Cryptography are all interests for me. I
                regularly play around with raspberry pis and adruinos and I have
                a fairly complicated LAN network at home.
              </p>
              <p>
                Outside of tech I enjoy playing the piano, listening to music,
                going outdoors on bike rides and hikes, going to the gym,
                cooking, being involved in local politics and volunteering in my
                community.
              </p>
              <p>You can reach me at elisewillar@gmail.com</p>
            </div>
          </div>
          <div id="carouselSlide1" className="carouselSlide">
            <div className="slideContent">
              <h3>I&apos;m skilled with</h3>
              <div className="hobbiesCategory">
                <p>
                  <i className="devicon-react-original colored" /> ReactJS
                </p>
                <p>
                  <i className="devicon-nextjs-original" /> NextJS
                </p>
                <p>
                  <i className="devicon-nodejs-plain colored" /> NodeJS
                </p>
                <p>
                  <i className="devicon-typescript-plain colored" /> Typescript
                </p>
                <p>
                  <i className="devicon-html5-plain colored" /> HTML
                </p>
                <p>
                  <i className="devicon-css3-plain colored" /> Less, CSS & Sass
                </p>
                <p>
                  <i className="devicon-linux-plain" /> Linux
                </p>
                <p>
                  <i className="devicon-mongodb-plain colored" /> MongoDB
                </p>
                <p>
                  <i className="devicon-git-plain colored" /> Git
                </p>
              </div>

              <h3>I&apos;m learning</h3>
              <div className="hobbiesCategory">
                <p>
                  <i className="devicon-rust-plain" /> Rust
                </p>
                <p>
                  <i className="devicon-csharp-plain colored" /> C#
                </p>
                <p>
                  <i className="devicon-python-plain colored" /> Python
                </p>
                <p>
                  {" "}
                  <Image
                    width="16px"
                    height="16px"
                    className="tauriIcon"
                    alt="Tauri Icon"
                    src={tauriIcon}
                  />{" "}
                  Tauri
                </p>
                <p>
                  <i className="devicon-unity-original" /> Unity
                </p>
              </div>
            </div>
          </div>
          <div id="carouselSlide2" className="carouselSlide">
            <div className="slideContent">
              <p>
               I haven&apos;t published any of my work so I have an absence of material to share as of now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
