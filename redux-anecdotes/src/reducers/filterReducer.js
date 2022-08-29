import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notiFilter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        word(state, action) {
            const filter = action.payload
            return filter
        }
    }
})

export const { word } = notiFilter.actions
export default notiFilter.reducer