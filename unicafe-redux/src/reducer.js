const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':{
      const newstat = {
        good : state.good +1,
        ok : state.ok,
        bad : state.bad
      }
      return newstat
    }
    case 'OK':{
      const newstat = {
        good : state.good,
        ok : state.ok + 1,
        bad : state.bad
      }
      return newstat
    }
    case 'BAD':{
      const newstat = {
        good : state.good,
        ok : state.ok,
        bad : state.bad +1
      }
      return newstat
    }
    case 'ZERO':{
      const newstat = {
        good : 0,
        ok : 0,
        bad : 0
      }
      return newstat
    }
    default: return state
  }
  
}

export default counterReducer