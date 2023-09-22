import React from 'react'
import E from './E'

export default function D(props) {
  return (
    <div>
      <h1>D - Components {props.mag}</h1>
      <E mag={props.mag}/>
    </div>
  )
}
