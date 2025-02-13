import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovies = () => {
  return (
    <div>
        <h1>This is Hotstar Movies</h1>
        <ul>
          <li><Link to="/play/moneyheist">Money heist</Link></li>
          <li><Link to="/play/india">India</Link></li>
        </ul>
    </div>
  )
}
