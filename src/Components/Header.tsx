import React from "react";
type FooterType = {
    title:string
}
export const Header = (props:FooterType)=>{
    return (
        <div>{props.title}</div>
    )
}