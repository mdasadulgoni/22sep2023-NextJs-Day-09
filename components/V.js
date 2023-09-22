import React from 'react'
import W from './W'

export default function V(props) {
  return (
    <div>
      <h1>V - Components {props.mag}</h1>
      <W mag={props.mag}/>
    </div>
  )
}
