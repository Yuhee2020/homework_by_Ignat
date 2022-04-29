import React from 'react'

import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Route, Routes} from 'react-router-dom'
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',

}

function Pages() {
    return (
        <div>

            <Routes>

                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={'/Junior'} element={<Junior/>}/>

                он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
