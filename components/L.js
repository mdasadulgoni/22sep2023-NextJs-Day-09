import React from 'react'
import M from './M'

export default function L(props) {
  return (
    <div>
      <h1>L - Components {props.mag}</h1>
      <M mag={props.mag}/>
    </div>
  )
}
