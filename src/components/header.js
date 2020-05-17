import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
  <nav className="navbar is-light" style={{ marginBottom: "2em" }}>
        <div className="navbar-brand">
          <Link
            to="/"
            style={{
              marginLeft: "5em",
              padding: "10px",
            }}
            className="has-text-dark is-size-3"
          >
            {siteTitle}
          </Link>
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
