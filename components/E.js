import React from 'react'
import F from './F'

export default function E(props) {
  return (
    <div>
      <h1>E - Components {props.mag} </h1>
      <F mag={props.mag}/>
    </div>
  )
}
