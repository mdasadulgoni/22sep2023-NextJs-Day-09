import React from 'react'
import K from './K'

export default function J(props) {
  return (
    <div>
      <h1>J - Components {props.mag}</h1>
      <K mag={props.mag}/>
    </div>
  )
}
