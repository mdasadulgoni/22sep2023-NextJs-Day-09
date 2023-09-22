import React from 'react'
import C from './C';

export default function B(props) {
    console.log(props.mag);
  return (
    <div>
      <h1>B - Components {props.mag}</h1>
      <C mag={props.mag }/>
    </div>
  )
}

