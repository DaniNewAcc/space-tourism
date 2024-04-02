import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Page';
import Destination from '../../pages/Destination/Page';
import Crew from '../../pages/Crew/Page';
import Technology from '../../pages/Technology/Page'
import NavItem from '../NavItem/Index';
import './styles.css';


const Navbar = () => {
  const navLinks = [
    {
      id: '/',
      title: 'Home',
      component: <Home />
    },
    {
      id: '/Destination',
      title: 'Destination',
      component: <Destination />
    },
    {
      id: '/Crew',
      title: 'Crew',
      component: <Crew />
    },
    {
      id: '/Technology',
      title: 'Technology',
      component: <Technology />
    },
  ];
  let location = useLocation();
  let sidebarRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth < 768);
  const [largerScreen, setIsLargerScreen] = useState(window.innerWidth > 1400);

  const sidebarHandler = (e) => {
    if (isOpen && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const resizeHandler = () => {
      setSidebarVisible(window.innerWidth < 768);
      setIsLargerScreen(window.innerWidth > 1400);
    }
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', sidebarHandler)
  })

  return (
    <nav className='navbar navbar-expand-md me-3 me-md-0 pt-sm-3 pt-md-0 pt-lg-5 fixed-top'>
      <div className="d-flex align-items-center justify-content-between w-100">
        <picture className="navbar-brand">
          <img className='logo mt-2' src="./src/assets/shared/logo.svg" alt="" />
        </picture>
        {sidebarVisible && <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent border-0" type="button">
          <span className={isOpen ? "hidden" : ""}>
            <img src="./src/assets/shared/icon-hamburger.svg" alt="" />
          </span>
        </button>}
        <div ref={sidebarRef} className={`${sidebarVisible ? 'sidebar' : ''}${isOpen ? ' open' : ''}${largerScreen ? 'd-flex align-items-center' : ''}`}>
          {sidebarVisible && <div className="d-flex justify-content-end">
            <button className='close' onClick={() => setIsOpen(!isOpen)} type="button">
              <span className={!isOpen ? "hidden" : ""}>
                <img src="./src/assets/shared/icon-close.svg" alt="" />
              </span>
            </button>
          </div>
          }
          {largerScreen && <span className='line'></span>}
          <ul className={`${sidebarVisible ? 'sidebar-group' : ''} navbar__group d-flex flex-column align-content-start flex-md-row align-items-md-center me-auto mb-2 mb-md-0`}>
          {navLinks.map((link, index) => {
            return (
              <NavItem key={link.id} id={link.id} title={link.title} index={index} location={location} sidebarVisible={sidebarVisible} largerScreen={largerScreen} />    
              );
          })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar