import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState([10,50])

    return (
        <div>
            <hr/>
            homeworks 11

            <div >
                <div>{value1}</div>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}

                />
            </div>

            <div>
                <div>{value2[0]}</div>
                <SuperDoubleRange
                    onChangeRange={setValue2}
                    value={value2}
                />
                <div>{value2[1]}</div>
            </div>

            <hr/>

            <hr/>
        </div>
    )
}

export default HW11
