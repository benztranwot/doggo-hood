import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/benztranwot/doggo-hood"
          target="_blank"
          rel="noreferrer"
        >
          Doggo Hood
        </a>
        . Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
