import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSide, isSideOpen } = useGlobalContext()
  return (
    <aside className={`${isSideOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeSide}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
