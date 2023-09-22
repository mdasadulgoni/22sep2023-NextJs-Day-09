import React from 'react'
import U from './U'

export default function T(props) {
  return (
    <div>
      <h1>T - Components {props.mag}</h1>
      <U mag={props.mag}/>
    </div>
  )
}
