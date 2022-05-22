import React, {useState} from 'react'
import {check18AC, homeWorkReducer, sortAC, SortACPayloadType} from './bll/homeWorkReducer'
import {MyButton} from "../../p1-main/MyButton/MyButton";
import s from "./HW8.module.css"

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any


    const finalPeople = people.map((p: UserType) => (
            <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
            </tr>
    ))

    const sortUp = (typeSort: SortACPayloadType) => setPeople(homeWorkReducer(initialPeople, sortAC(typeSort)))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, check18AC(18)))

    return (
        <div>
            <hr/>
            homeworks 8
            <table className={s.table}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>

            {finalPeople}

            </table>
            <MyButton callback={() => {sortUp("up")}} name={"sort up"}/>
            <MyButton callback={() => {sortUp("down")}} name={"sort down"}/>
            <MyButton callback={check18} name={"check 18"}/>

        </div>
    )
}

export default HW8
