import React from 'react'
import { Link } from '@reach/router'
import { IconContext } from 'react-icons'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { BsChatDots, BsChatDotsFill } from 'react-icons/bs'
import { RiUserLine, RiUserFill, RiSearchLine, RiSearchFill } from 'react-icons/ri'

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
