/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import {auth} from './config/firebase'

import Auth from './components/auth'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
      <Auth />
    </Fragment>
  )
}

export default App
