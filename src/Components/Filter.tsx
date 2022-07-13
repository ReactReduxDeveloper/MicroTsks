import React from "react";
import {Bunc, FilterType} from "../App";
type PropsType = {
    FilterBanknotsFuncRubble: Bunc[]
    FilterFuction:(Bunknot: FilterType)=>void
}
export const Trial = (props:PropsType)=> {
    return (
    <>
        <ul>
            {props.FilterBanknotsFuncRubble.map((el,index)=>{
                return (
                    <li key={index}>{el.banknote}</li>
                )
            })}

        </ul>

        <button onClick={() => props.FilterFuction('Rubble')}>Rubble</button>
        <button onClick={() => props.FilterFuction('Dollar')}>Dollar</button>
        <button onClick={() => props.FilterFuction('EURO')}>EURO</button>
        <button onClick={() => props.FilterFuction('all')}>All</button>

    </>
    )
}