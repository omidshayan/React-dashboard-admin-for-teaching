import React from 'react'
import Warning from './../../components/warnings/Warning';


export default function User() {
  return (
    <div className="content">
        <main>
            <Warning msg={'user is not found'}/>
        </main>
    </div>
  )
}
