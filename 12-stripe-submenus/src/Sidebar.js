import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { closeSidebar, isSidebar } = useGlobalContext()
  return (
    <div
      className={`${isSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            return (
              <article key={index}>
                <h4>{item.page}</h4>
                <div className='sidebar-sublinks'>
                  {item.links.map((link, index) => {
                    return (
                      <a href={link.url} key={index}>
                        {link.icon}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
