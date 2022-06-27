import React from 'react'

function skilledTechnology(props: any) {

    interface props {
        name: string
        link: string
        icon: string
    }

    return (
        <li>
            <a href={props.link} target={"_blank"} rel="noreferrer" className={"technologyLink"} >
                <i className={props.icon} /> {props.name}
            </a>
        </li>
    )
}

export default skilledTechnology