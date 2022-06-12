import React from 'react'
import {Slider} from "@mui/material";


type PropsType = {
    onChangeRange: (value: number[]) => void
    value: number[]
};

const SuperDoubleRange = (props:PropsType) => {

    const onChangeCallback = (event: Event, value: number | number[]) => {
        props.onChangeRange(value as number[])
    }



    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={props.value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                style={{width:"200px"}}
                />

        </>
    )
}

export default SuperDoubleRange

