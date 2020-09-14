import React from 'react'

export default function Stats(props) {
  const { stats } = props
  return (
    <div className="stats">
      <h3>Hello {stats.name}</h3>
      <h3>{stats.age}</h3>

    </div>
  )
}
