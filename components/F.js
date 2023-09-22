import React from 'react'
import G from './G'

export default function F(props) {
  return (
    <div>
      <h1>F - Components {props.mag}</h1>
      <G  mag={props.mag}/>
    </div>
  )
}
