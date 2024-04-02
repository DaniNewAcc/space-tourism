import '../Navbar/styles.css';
import { NavLink } from 'react-router-dom';

export default function NavItem({ index, id, title, location, sidebarVisible, largerScreen }) {
        return (
          <>
            <li key={id} className={`${sidebarVisible ? 'sidebar-item' : ''} ${location.pathname === id && !sidebarVisible ? 'active-link' : ''} item__styling`}>
                <NavLink key={id} to={id}><span className={`${sidebarVisible || largerScreen ? 'nav__number' : 'hidden'}`}>{`0${index}`}</span>{title}</NavLink>
            </li>
          </>
        );
}

