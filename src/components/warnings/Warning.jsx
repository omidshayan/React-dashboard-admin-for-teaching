import React from 'react'
import './warning.css';


export default function Warning({msg}) {
  return (
    <>
        <div className="show-warning">
            {msg}
        </div>
    </>
  )
}
