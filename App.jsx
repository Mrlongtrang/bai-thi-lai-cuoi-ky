import React from 'react'
import "./App.css"
import { HEADER } from '../../components/HEADER'
import { ASIDE } from '../../components/ASIDE'
import { BOX } from "../../components/BOX"
import TITLE from '../../components/TITLE'
import FOOTER from '../../components/FOOTER'

export const App = () => {
  return (
    <div className="app">
    <HEADER />
  <div className="body">
    <TITLE />
    <ASIDE />
  </div>
  <div className='box'>
    <BOX />
  </div>
  <div className="footer">
    <FOOTER />
  </div>
 </div>
  )
}

export default App;