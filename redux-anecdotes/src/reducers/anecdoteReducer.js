import { createSlice } from '@reduxjs/toolkit'
import anecServ from '../services/anectodes'

const getId = () => (100000 * Math.random()).toFixed(0)



const initialState = []

const anecSlice = createSlice({
  name: 'anectodes',
  initialState,
  reducers: {
    vote(state, action) {
      const changedAnec = action.payload
      const ordered = state.map(n =>
        n.id !== changedAnec.id ? n : changedAnec
      )
      ordered.sort((a, b) => { return b.votes - a.votes })
      return ordered
    },
    newAnec(state, action) {
      const anectdote = action.payload
      state.push({
        content: anectdote,
        id: getId(),
        votes: 0
      })
    },
    setAnec(state, action) {
      return action.payload
    },
    createAnec(state, action) {
      state.push(action.payload)
    }
  }
})

export const { vote, newAnec, createAnec, setAnec } = anecSlice.actions

export const initAnec = () =>{
  return async dispatch => {
    const anecs = await anecServ.getAll()
    dispatch(setAnec(anecs))
  }
}

export const createNew = content => {
  return async dispatch => {
    const anec = await anecServ.createNew(content)
    dispatch(createAnec(anec))
  }
}

export const updateVote = anec => {
  return async dispatch => {
    const resp = await anecServ.updateLikes(anec)
    dispatch(vote(resp))
  }
}

export default anecSlice.reducer