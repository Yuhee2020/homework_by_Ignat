
export type StateType={
    loading:boolean
}
const initState = {
 loading:false
}

export const loadingReducer = (state:StateType = initState, action: loadingACType): StateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading:!state.loading}
        }
        default: return state
    }
}

type loadingACType=ReturnType<typeof loadingAC>
export const loadingAC = ()=> {
    return{
        type: "LOADING"
    }as const
}