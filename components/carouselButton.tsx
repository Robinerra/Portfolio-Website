import React from 'react'

function carouselButton(props: any) {
    interface props {
        id: number
        name: string
        slide: number
        setSlide: any
    }

let classPlaceholder: string = ""
   if (props.slide === props.id) {
    classPlaceholder = "active"
   }

    return (
        <button className={`carouselButton ${classPlaceholder}`} onClick={() => props.setSlide(props.id)} id={`carouselButton${props.id}`}>{props.name}</button>
    )
}

export default carouselButton