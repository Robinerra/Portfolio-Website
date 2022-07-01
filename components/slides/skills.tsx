//Copyright Elise Willar 2022 for elisewillar.com
//1st of July 2022

import React from 'react'
import SkilledTechnology from '../skilledTechnology'
import Image from "next/image";
import tauriIcon from "../../public/tauriIcon.png";
import style from '../../styles/components/skillsSlide.module.css'

function skills() {
  return (
    <div className="slideContent">
              <h3>I&apos;m skilled with</h3>

              <ul className={style.hobbiesCategory}>

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
              <ul className={style.hobbiesCategory}>

                <SkilledTechnology name="Rust" link="https://www.rust-lang.org/" icon="devicon-rust-plain" />
                <SkilledTechnology name="C#" link="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" icon="devicon-csharp-plain colored" />
                <SkilledTechnology name="Python" link="https://www.python.org/" icon="devicon-python-plain colored" />

                <li>
                  <a href="https://tauri.app/" tabIndex={-1} target={"_blank"} rel="noreferrer" className={"technologyLink"} >
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
  )
}

export default skills