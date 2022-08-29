import React from "react"
import { connect } from 'react-redux' 

import { createNew } from "../reducers/anecdoteReducer"
import { useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnectode = (event) => {
        event.preventDefault()
        const content = event.target.anectdote.value
        event.target.anectdote.value = ''
        props.createNote(content)
        props.notif('New anectode added', 5000)
      }

    return(
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnectode}>
          <div><input name='anectdote'/></div>
          <button type='submit'>create</button>
        </form>
      </div>
    )
  }

  const mapDispatchToProps = dispatch => 
  {  
    return {
      createNote: value =>{
          dispatch(createNew(value))
        },
      notif: (value, time) =>{
        dispatch(notify(value, time))
      }
    }
  }
  export default connect(null, mapDispatchToProps) (AnecdoteForm)