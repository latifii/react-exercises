import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)
  const [colmun, setColmun] = useState(0)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    const lengthLink = links.length
    lengthLink > 2 ? setColmun(lengthLink) : setColmun(2)
  }, [location])

  return (
    <aside
      className={`${isSubmenu ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${colmun}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}
export default Submenu
