import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector( state =>{
    if (state.filter === ''){
      return state.anectodes
    }
    return state.anectodes.filter(anec => anec.content.includes(state.filter)) 
  })
  const dispatch = useDispatch()

  const increment = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch( updateVote(anecdote) )
    dispatch( notify(`you voted ${anecdote.content}`, 5000))
  }

  return(
    <div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => increment(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )  
} 

export default AnecdoteList