import React from 'react'
import L from './L'

export default function K(props) {
  return (
    <div>
      <h1>K - Components {props.mag}</h1>
      <L mag={props.mag}/>
    </div>
  )
}
