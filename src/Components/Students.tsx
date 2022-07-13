import React, {MouseEventHandler, useState} from "react";

type ButtonType = {
    CallbackForButton:()=>void
}
export const NewComponent = (props:ButtonType) => {
    let [A,SetA] = useState(1)
    const SUMFUNCTION = ()=> {
        if (A === 5){
            {SetA(A)}
        }
        else
        SetA(++A)
    }
const REFFUNCTION = ()=> {
    SetA(1)
}
debugger
    return (

        <div>
            <h1>{A}</h1>
        <button onClick={SUMFUNCTION}>Sum</button>
        <button onClick={REFFUNCTION}>REF</button>
        </div>
    )

  /*  const OnClickHandler = props.CallbackForButton
    return (


        <div>
          <button onClick={OnClickHandler}>HELLO</button>
        </div>
    )*/
/*
    return (
        <div>
            <ul>
                <div>
                    {props.Students.map((el) => {
                        return (
                            <li key={el.id}>{el.age}</li>
                        )

                    })}
                </div>
            </ul>
            <tr>
                {props.topCars.map((el, index)=>{
                    return (
                        <th key={index}>{el.manufacturer} + {el.model}</th>
                    )

                })}



            </tr>
        </div>
    )
*/

}