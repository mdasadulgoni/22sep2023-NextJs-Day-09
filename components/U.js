import React from 'react'
import V from './V'

export default function U(props) {
  return (
    <div>
      <h1>U - Components {props.mag}</h1>
      <V mag={props.mag}/>
    </div>
  )
}
