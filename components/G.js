import React from 'react'
import H from './H'

export default function G(props) {
  return (
    <div>
      <h1>G - Components {props.mag}</h1>
      <H  mag={props.mag}/>
    </div>
  )
}
