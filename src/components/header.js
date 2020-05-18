import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="topNav" className="navbar fixed-top navbar-inverse bg-inverse">
         <div className="mx-auto">
          <Link
              to="/"
              className="navbar-brand text-decoration-none text-reset"
            >
              <img src={logo} width="50" height="50" alt="dataporn"/>
            </Link>
            <input type="text" className="mr-sm-2 search" placeholder="  search" />
         </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
