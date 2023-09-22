import React from 'react'
import I from './I'

export default function H(props) {
  return (
    <div>
      <h1>H - Components {props.mag}</h1>
      <I mag={props.mag}/>
    </div>
  )
}
