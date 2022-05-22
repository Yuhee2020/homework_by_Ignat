import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: sortACType | check18ACType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case "up": {
                    return [...state].sort((a, b) => a.age - b.age)
                }
                case "down": {
                    return [...state].sort((a, b) => b.age - a.age)
                }
                default:
                    return state
            }

        }
        case 'check': {

            return state.filter(el=>el.age>=action.payload)
        }
        default:
            return state
    }
}
export type SortACPayloadType="up" | "down"
type sortACType = ReturnType<typeof sortAC>
export const sortAC = (payload: SortACPayloadType) => {
    return {
        type: "sort",
        payload: payload
    } as const
}

type check18ACType = ReturnType<typeof check18AC>
export const check18AC = (payload: number) => {
    return {
        type: "check",
        payload: payload
    } as const
}