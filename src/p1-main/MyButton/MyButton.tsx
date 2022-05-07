import React from "react";
import s from "./MyButton.module.css"

type PropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}


export const MyButton = (props: PropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return <button onClick={onClickHandler}
                   className={s.btn}
                   disabled={props.disabled}>
        {props.name}
    </button>
}