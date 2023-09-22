import React from 'react'
import S from './S'

export default function R(props) {
  return (
    <div>
      <h1>R - Components {props.mag}</h1>
      <S mag={props.mag}/>
    </div>
  )
}
