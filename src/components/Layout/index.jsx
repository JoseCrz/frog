import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Context } from '../../Context'

import { Navbar } from '../Navbar'
import { Modal } from '../Modal'

import { Wrapper, Main } from './styles'

export const Layout = ({ children, pageName }) => {
  const { isModalOpen } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>{`Frog | ${pageName}`}</title>
      </Helmet>
      <Wrapper>
        <Main>
          {
            children
          }
        </Main>
        <Navbar />
      </Wrapper>
      <Modal isModalOpen={isModalOpen} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired
}
