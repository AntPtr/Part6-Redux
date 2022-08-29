import { useSelector } from 'react-redux'
import { connect } from 'react-redux'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div>
      {
        props.notifications === '' ? null :
        <div style={style}>
          {props.notifications}
        </div>
      }
    </div>
  )
}

const mapStatetoProp =(state) => {
  return {
    notifications: state.notifications
  }
}

const connectedNot = connect(mapStatetoProp)(Notification)

export default connectedNot