import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {MyButton} from "../../p1-main/MyButton/MyButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void// need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onEnter}
                   onBlur={setNameCallback}/>
            <MyButton name={"add"} callback={addUser} disabled={!!error}/>
            <span>{totalUsers}</span>
            <div className={s.error}>{error}</div>


        </div>
    )
}

export default Greeting
