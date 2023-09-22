import React from 'react'
import D from './D'

export default function C(props) {
  return (
    <div>
      <h1>C - Components {props.mag}</h1>
      <D mag={props.mag} />
    </div>
  )
}