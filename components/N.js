import React from 'react'
import O from './O'

export default function N(props) {
  return (
    <div>
      <h1>N - Components {props.mag}</h1>
      <O mag={props.mag} />
    </div>
  )
}
