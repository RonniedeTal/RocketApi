import React from 'react'
import errorImage from "../assets/images/error_background.png"

function ErrorPage() {
  return (
    <div className="error-page">
        <img  src={errorImage} style={{width:1300}} />
      
    </div>
  )
}

export default ErrorPage
