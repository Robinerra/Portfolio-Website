import React, { useState } from "react";
import CarosuelButton from "./carosuelButton";
import Image from "next/image";
import tauriIcon from "../public/tauriIcon.png";

function Carousel() {
  const [slide, setSlide] = useState<number>(0);

  return (
    //Would've loved to call the carousel slides/buttons their actual names but
    //numbers are so much easier to work with.
    //0 = about me, 1 = skills, 2 = projects.
    <>
      <CarosuelButton id={0} name="About" setSlide={setSlide} slide={slide} />
      <CarosuelButton id={1} name="Skills" setSlide={setSlide} slide={slide} />
      <CarosuelButton
        id={2}
        name="Projects"
        setSlide={setSlide}
        slide={slide}
      />

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
                with me to adulthood and has been a daily hobby of mine since.
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
                None of my projects are open source right now, but I&apos;m
                working on publishing them to add here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
