import React from 'react'
import PropTypes from 'prop-types'

const Header = ({logo='FEEDBACK UI'}) => {
  return (
    <header>
        <div className="container">
            <h2>
                {logo}
            </h2>
        </div>
    </header>
  )
}

Header.propTypes = {
    logo: PropTypes.string
}

export default Header