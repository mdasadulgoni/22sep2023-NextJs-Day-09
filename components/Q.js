import React from 'react'
import R from './R'

export default function Q(props) {
  return (
    <div>
      <h1>Q - Components {props.mag}</h1>
      <R mag={props.mag}/>
    </div>
  )
}
