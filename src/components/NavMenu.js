import React, { useState ,useEffect} from 'react';
import { Collapse, Navbar,  NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import './NavMenu.css';
import 'bootstrap/dist/css/bootstrap.css';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showDot, setShowDot] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  // 監聽路由變化，決定是否顯示黑點
  useEffect(() => {
    setShowDot(location.pathname === '/');
  }, [location.pathname]);

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white " container light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Home {showDot&& collapsed && <span className="dot">&#8226;</span>}
              </NavLink>
            </NavItem>

          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
