
export type ThemeType= 'dark'| 'red'| 'some'

export type InitStateType = {theme:string}
const initState:InitStateType = {theme: "some"}
;

export const themeReducer = (state:InitStateType = initState, action: changeThemeACType):InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {theme:action.theme};
        }
        default: return state;
    }
};
export type changeThemeACType=ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme:string)=> {
    return{
        type: "CHANGE_THEME",
        theme,
    }as const
}; // fix any


