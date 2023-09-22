import React from 'react'
import X from './X'

export default function W(props) {
  return (
    <div>
      <h1>W - Components {props.mag}</h1>
      <X mag={props.mag}/>
    </div>
  )
}
