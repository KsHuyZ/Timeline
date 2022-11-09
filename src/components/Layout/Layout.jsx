import React from 'react'
import Home from '../pages/Home'
import Header from '../Header/Header'
import Routers from '../routes/Routes'

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>

    </div>

  )
}

export default Layout