import React from 'react'
import B from './B';

export default function A(props) {
    //console.log(props.name);
    console.log(props.mag);
  return (
    <div>
      <h1>A - Components {props.mag}</h1>
      <B mag={props.mag} />
    </div>
  )
}

