import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './reducers/anecdoteReducer'
import notifyReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({  
    reducer: {
        anectodes: anecReducer,
        notifications: notifyReducer,
        filter: filterReducer
    }
})

export default store