import { useDispatch } from 'react-redux'
import { word } from "../reducers/filterReducer"
import { connect } from 'react-redux' 

const Filter = (props) => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
      // input-field value is in variable event.target.value
        event.preventDefault()
        const content = event.target.value
        props.filter(content)
    }

    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  const mapDispatchToProps = dispatch => 
  {  
    return {
      filter: value =>{
          dispatch(word(value))
        },
    }
  }
  export default connect(null, mapDispatchToProps) (Filter)