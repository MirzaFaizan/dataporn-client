import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="topNav" className="navbar fixed-top navbar-inverse bg-inverse">
          <Link
            to="/"
            className="navbar-brand mx-auto text-decoration-none text-reset"
          >
            {siteTitle}
          </Link>
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
