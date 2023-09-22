import React from 'react'
import Q from './Q'

export default function P(props) {
  return (
    <div>
      <h1>P - Components {props.mag} </h1>
      <Q mag={props.mag}/>
    </div>
  )
}
