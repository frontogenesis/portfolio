import * as React from "react"
import Navbar from "./navbar"

const Layout = ({ title, children }) => {

  function PageTitle() {
    return <h1 className="page-title">{title}</h1>  
  }
  
  return (
    <div className="global-wrapper">
      <Navbar />
      <PageTitle />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Ray Hawthorne
      </footer>
    </div>
  )
}

export default Layout
