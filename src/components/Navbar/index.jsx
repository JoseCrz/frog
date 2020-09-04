import React from 'react'
import { Link } from '@reach/router'
import { IconContext } from 'react-icons'
import { AiFillHome } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { RiUserLine, RiSearchLine } from 'react-icons/ri'

import { ActionButton } from '../ActionButton'

import { Nav, Ul, Li } from './styles'

export const Navbar = () => {
  return (
    <IconContext.Provider value={{ color: 'var(--text-color)', size: '24px' }}>
      <Nav>
        <Ul>
          <Li>
            <Link to='/'>
              <AiFillHome />
            </Link>
          </Li>
          <Li>
            <Link to='/'>
              <RiSearchLine />
            </Link>
          </Li>
          <Li>
            <ActionButton />
          </Li>
          <Li>
            <Link to='/'>
              <BsChatDots />
            </Link>
          </Li>
          <Li>
            <Link to='/'>
              <RiUserLine />
            </Link>
          </Li>
        </Ul>
      </Nav>
    </IconContext.Provider>
  )
}
