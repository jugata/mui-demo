import React from 'react'
import Stats from './Stats'
const stats = {
  name: "Brad",
  age: 33,
  phone: "818-333-4444"
}

const company = {
  name: "Clorox"
}


export default function Layout(props) {
  return (
    <div className="layout-container">

      <Stats stats={stats} />

      <h1>Layout</h1>
      {props.children}
      <h2>I'm part of Layout</h2>
    </div>

  )
}
