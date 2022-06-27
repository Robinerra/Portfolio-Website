//Copyright Elise Willar 2022 for elisewillar.com
//26th of June 2022

import React from "react";
import style from "../styles/githubProject.module.css";

function githubProject(props: any) {
  interface props {
    link: string;
    name: string;
    description: string;
    icons: Array<string>;
  }

  let icons1: any = [];

  props.icons.forEach((i: string) => {
    icons1.push(<i className={`${i} ${style.projectIcon}`} />);
  });

  return (
    <div className={style.projectContainer}>
      <h3>
        <i className="devicon-github-original" />{" "}
        <a target={"_blank"} rel="noreferrer" tabIndex={4} href={props.link}>
          {props.name}
        </a>{" "}
        {icons1}
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default githubProject;
