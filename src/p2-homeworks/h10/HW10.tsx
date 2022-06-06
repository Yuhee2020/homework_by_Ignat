import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import {MyButton} from "../../p1-main/MyButton/MyButton";
import s from "./HW10.module.css"

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state=>state.loading.loading)
    const dispatch=useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>dispatch(loadingAC()), 5000)

        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div className={s.loader}></div>
                ) : (
                    <div>
                        <MyButton callback={setLoading} name={"set loading"}/>
                    </div>
                )
            }

            <hr/>

            <hr/>
        </div>
    )
}

export default HW10
