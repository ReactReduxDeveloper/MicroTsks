import React from "react";
type FooterType = {
    title:string
}

export const Body = (props:FooterType)=>{
    return (
        <div>{props.title}</div>
    )
}