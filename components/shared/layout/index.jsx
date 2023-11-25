import React from 'react'

const Layout = ({children}) => {
  return (
    <>
      <nav>
        <div className="">
          <p>Express Delivery Available on selected Pin Codes! Shop Now!</p>
        </div>
      </nav>
      <div className="">
        {children}
      </div>
      <div className="">footer</div>
    </>
  )
}

export default Layout