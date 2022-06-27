//Copyright Elise Willar 2022 for elisewillar.com
//26th of June 2022
import React, { useState } from "react";
import CarouselButton from "./carouselButton";
import Image from "next/image";
import tauriIcon from "../public/tauriIcon.png";
import GithubProject from "./githubProject";
import githubProjectStyle from "../styles/githubProject.module.css";

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

  //And yes the skills & hobbies page is hell
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
                with me to adulthood and has been a daily hobby of mine for 4
                years.
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
                  <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-react-original colored" /> ReactJS
                  </a>
                </p>
                <p>
                  <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-nextjs-original" /> NextJS
                  </a>
                </p>
                <p>
                  <a href="https://nodejs.org/en/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-nodejs-plain colored" /> NodeJS
                  </a>
                </p>
                <p>
                  <a href="https://www.typescriptlang.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-typescript-plain colored" /> Typescript
                  </a>
                </p>
                <p>
                  <a href="https://www.tomorrowtides.com/html23788.html" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-html5-plain colored" /> HTML
                  </a>
                </p>
                <p>
                  <a href="https://lesscss.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-css3-plain colored" /> Less/CSS
                  </a>
                </p>
                <p>
                  <a href="https://www.linux.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-linux-plain" /> Linux
                  </a>
                </p>
                <p>
                  <a href="https://www.mongodb.com/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-mongodb-plain colored" /> MongoDB
                  </a>
                </p>
                <p>
                  <a href="https://git-scm.com/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-git-plain colored" /> Git
                  </a>
                </p>
              </div >

              <h3>I&apos;m learning</h3>
              <div className="hobbiesCategory">
                <p>
                  <a href="https://www.rust-lang.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-rust-plain" /> Rust
                  </a>
                </p>
                <p>
                  <a href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-csharp-plain colored" /> C#
                  </a>
                </p>
                <p>
                  <a href="https://www.python.org/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-python-plain colored" /> Python
                  </a>
                </p>
                <p>
                  <a href="https://tauri.app/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    {" "}
                    <Image
                      width="16px"
                      height="16px"
                      className="tauriIcon"
                      alt="Tauri Icon"
                      src={tauriIcon}
                    />{" "}
                    Tauri
                  </a>
                </p>
                <p>
                  <a href="https://unity.com/" target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                    <i className="devicon-unity-original" /> Unity
                  </a>
                </p>
              </div>
            </div >
          </div >
          <div id="carouselSlide2" className="carouselSlide">
            <div className="slideContent">
              <div className={githubProjectStyle.container}>
                <GithubProject
                  link="https://github.com/Robinerra/Portfolio-Website"
                  name="elisewillar.com"
                  description="A minimalist design portfolio, used by yours truly."
                  icons={[
                    "devicon-nextjs-original",
                    "devicon-typescript-plain colored",
                    "devicon-react-original",
                    "devicon-less-plain-wordmark",
                  ]}
                />
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default Carousel;
