import React, {useState} from 'react';
import './App.css';
import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {NewComponent} from "./Components/Students";
import {Trial} from "./Components/Filter";

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]
export const topCars = [
    {manufacturer: "BMW", model: 'm5cs'},
    {manufacturer: "Mercedes", model: 'e63s'},
    {manufacturer: "Audi", model: 'rs6'}
]
export type Bunc = {
    banknote: 'Rubble' | 'Dollar' |'EURO'
    nominal:number
    number:string
}
export type FilterType = 'Rubble' | 'Dollar' |'EURO' | "all"


function App() {

   const [Bunknots, BunknotsSet] = useState<Bunc[]>([
        {banknote: 'Rubble', nominal: 100, number: 'esfaedwwa'},
        {banknote: 'Dollar', nominal: 600, number: 'egreegrre'},
        {banknote: 'EURO', nominal: 500, number: 'esfaergeerga'},
        {banknote: 'EURO', nominal: 600, number: 'esfatiyyudwwa'},
        {banknote: 'EURO', nominal: 300, number: 'esfaeffeswa'},
        {banknote: 'Rubble', nominal: 500, number: 'esfgrdwwa'},
        {banknote: 'Rubble', nominal: 800, number: 'esfa6tuwwa'},
        {banknote: 'Dollar', nominal: 200, number: 'esfaregwwa'},
        {banknote: 'Rubble', nominal: 300, number: 'esfajtywa'},
        {banknote: 'Dollar', nominal: 100, number: 'esfauliwwa'},

    ])
    const [filter, Setfilter] = useState<FilterType>("all")
    let FilterBanknotsFuncRubble = Bunknots
    if (filter === 'Rubble') {
        FilterBanknotsFuncRubble = Bunknots.filter(el => el.banknote === "Rubble")
    }
    if (filter === 'EURO') {
        FilterBanknotsFuncRubble = Bunknots.filter(el => el.banknote === "EURO")
    }
    if (filter === 'Dollar') {
        FilterBanknotsFuncRubble = Bunknots.filter(el => el.banknote === "Dollar")
    }
    const FilterFuction = (Bunknot: FilterType) => {
Setfilter(Bunknot)
    }

    return (
        <Trial FilterBanknotsFuncRubble={FilterBanknotsFuncRubble} FilterFuction={FilterFuction}/>
    )
}


export default App;
