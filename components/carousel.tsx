//Copyright Elise Willar 2022 for elisewillar.com
//26th of June 2022
import React, { useState } from "react";
import CarouselButton from "./carouselButton";
import Image from "next/image";
import tauriIcon from "../public/tauriIcon.png";
import GithubProject from "./githubProject";
import githubProjectStyle from "../styles/githubProject.module.css";
import SkilledTechnology from "./skilledTechnology";

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

              <ul className="hobbiesCategory">

                <SkilledTechnology name="ReactJS" link="https://reactjs.org/" icon="devicon-react-original colored" />
                <SkilledTechnology name="NextJS" link="https://nextjs.org/" icon="devicon-nextjs-original" />
                <SkilledTechnology name="NodeJS" link="https://nodejs.org/en/" icon="devicon-nodejs-plain colored" />
                <SkilledTechnology name="Typescript" link="https://www.typescriptlang.org/" icon="devicon-typescript-plain colored" />
                <SkilledTechnology name="HTML" link="https://www.tomorrowtides.com/html23788.html" icon="devicon-html5-plain colored" />
                <SkilledTechnology name="Less/CSS" link="https://lesscss.org/" icon="devicon-css3-plain colored" />
                <SkilledTechnology name="Linux" link="https://www.linux.org/" icon="devicon-linux-plain" />
                <SkilledTechnology name="MongoDB" link="https://www.mongodb.com/" icon="devicon-mongodb-plain colored" />
                <SkilledTechnology name="Git" link="https://git-scm.com/" icon="devicon-git-plain colored" />

              </ul >

              <h3>I&apos;m learning</h3>
              <ul className="hobbiesCategory">

                <SkilledTechnology name="Rust" link="https://www.rust-lang.org/" icon="devicon-rust-plain" />
                <SkilledTechnology name="C#" link="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" icon="devicon-csharp-plain colored" />
                <SkilledTechnology name="Python" link="https://www.python.org/" icon="devicon-python-plain colored" />

                <li>
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
                </li>

                <SkilledTechnology name="Unity" link="https://unity.com/" icon="devicon-unity-original" />


              </ul>
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
