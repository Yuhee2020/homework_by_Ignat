import React from 'react'
import {Slider} from "@mui/material";


type PropsType = {
    onChangeRange: (value: number,) => void
    value: number
};

const SuperRange = (props: PropsType) => {

    const onChangeCallback = (event: Event, value: number | number[]) => {
        props.onChangeRange(value as number)
    }


    return (
        <>
            <Slider
                aria-label="Volume"
                value={props.value}
                onChange={onChangeCallback}
                style={{width: "200px"}}/>

        </>
    )
}

export default SuperRange
