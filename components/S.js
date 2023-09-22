import React from 'react'
import T from './T'

export default function S(props) {
  return (
    <div>
      <h1>S - Components {props.mag}</h1>
      <T mag={props.mag}/>
    </div>
  )
}
