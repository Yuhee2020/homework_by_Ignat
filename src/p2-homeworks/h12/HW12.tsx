import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import {orange} from "@mui/material/colors";

const themes = ['dark', 'red', 'some', "orange"];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.theme.theme)
    const dispatch=useDispatch()
    const changeTheme=(theme:string)=>{
        dispatch(changeThemeAC(theme))
    }

debugger


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div><SuperSelect options={themes} onChangeOption={changeTheme} value={theme}/></div>
            <div><SuperRadio options={themes} onChangeOption={changeTheme} value={theme}/></div>


            <hr/>
        </div>
    );
}

export default HW12;
