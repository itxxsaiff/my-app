import React from 'react'


function Alert(props) {
  return (
       props.alert && <>
       <div className={`py-4 px-3 text-white bg-${props.alert.types} fade show`}>
            <strong>{props.alert.types.charAt(0).toUpperCase() + props.alert.types.slice(1)}</strong> : {props.alert.message}
            </div>
            </>
  )
}

export default Alert