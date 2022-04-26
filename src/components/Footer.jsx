import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        ©{new Date().getFullYear()}{" "}
        <a href="https://sumit-raj.netlify.app/" target="_blank" rel="noreferrer"> Sumit Raj </a>
      </footer>
    </div>
  )
}

export default Footer