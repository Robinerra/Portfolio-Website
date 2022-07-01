//Copyright Elise Willar 2022 for elisewillar.com
//1st of July 2022

import React from 'react'
import GithubProject from '../githubProject'
import style from '../../styles/components/projectsSlide.module.css'

function projects() {
  return (
    <div className="slideContent">
    <div className={style.githubContainer}>
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
  )
}

export default projects