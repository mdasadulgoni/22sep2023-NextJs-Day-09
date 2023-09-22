import React from 'react'
import Y from './Y'

export default function X(props) {
  return (
    <div>
      <h1>X - Components {props.mag}</h1>
      <Y mag={props.mag}/>
    </div>
  )
}
