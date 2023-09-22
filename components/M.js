import React from 'react'
import N from './N'

export default function M(props) {
  return (
    <div>
      <h1>M - Components {props.mag}</h1>
      <N mag={props.mag} />
    </div>
  )
}
