//Copyright Elise Willar 2022 for elisewillar.com
//19th of June 2022
import React from "react";

function carouselButton(props: any) {
  interface props {
    id: number;
    name: string;
    slide: number;
    setSlide: any;
  }

  //If the current slide is equal to the prop id, it's active so set the class to active
  let classPlaceholder: string = "";
  if (props.slide === props.id) {
    classPlaceholder = "active";
  }

  return (
    <button
      className={`carouselButton ${classPlaceholder}`}
      onClick={() => props.setSlide(props.id)}
      id={`carouselButton${props.id}`}
      tabIndex={-1}
    >
      {props.name}
    </button>
  );
}

export default carouselButton;
