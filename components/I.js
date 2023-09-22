import React from 'react'
import J from './J'

export default function I(props) {
  return (
    <div>
      <h1>I - Components {props.mag}</h1>
      <J mag={props.mag}/>
    </div>
  )
}
