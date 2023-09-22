import React from 'react'
import Z from './Z'


export default function Y(props) {
  return (
    <div>
      <h1>Y - Components {props.mag}</h1>
      <Z mag={props.mag} sir=" ====== Sir : Check my Code"/>
    </div>
  )
}
