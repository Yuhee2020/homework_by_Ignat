import React from 'react'
import s from "./Message.module.css"

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messagePropsType) {
    return (
        <div className={s.block}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
