import React from 'react'
import PropTypes from 'prop-types'

import { H1 } from './styles'

export const Header = ({ children }) => {
  return (
    <header>
      <H1>{children}</H1>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}
