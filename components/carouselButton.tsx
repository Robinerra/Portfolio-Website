//Copyright Elise Willar 2022 for elisewillar.com
//1st of July 2022
import React from "react";
import style from '../styles/components/carouselButton.module.css'

function carouselButton(props: any) {

  //SetSlide is from the usestate from the carousel component we passed through
  interface props {
    id: number;
    name: string;
    slide: number;
    setSlide: any;
  }


  //If the current slide is equal to the prop id, it's active so set the class to active
  let classPlaceholder: string = "";
  if (props.slide === props.id) {
    classPlaceholder = style.active;
  }

  return (
    <button
      className={`${style.button} ${classPlaceholder}`}
      onClick={() => props.setSlide(props.id)}
      id={`carouselButton${props.id}`}
      tabIndex={-1}
    >
      {props.name}
    </button>
  );
}

export default carouselButton;
