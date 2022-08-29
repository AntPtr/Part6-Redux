import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
let timeOutId

const notiSlice = createSlice({
    name: 'notifies',
    initialState,
    reducers: {
        allert(state, action) {
            const noty = action.payload
            return noty
        },
        dismiss(state, action) {
            const noty = action.payload
            return noty
         }
    }
})

export const notify = (message, seconds) => {
    return async dispatch =>  {
        dispatch(allert(message))
        timeOutId = setTimeout(() => {
            if(timeOutId){
                clearTimeout(timeOutId)
            }
            dispatch(dismiss(''))
        }, seconds)
    }
}

export const { allert, dismiss } = notiSlice.actions
export default notiSlice.reducer