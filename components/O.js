import React from 'react'
import P from './P'

export default function O(props) {
  return (
    <div>
      <h1>O - Components {props.mag}</h1>
      <P mag={props.mag} />
    </div>
  )
}
