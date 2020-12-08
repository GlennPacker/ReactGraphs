import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
    const navItems = [{
        id: "gauge",
        label: 'gauge',
        to: '/gauge'
    }]

    return (
        <div className="nav" style={{ display: 'flex', flexDirection: 'column'}}>
            { navItems.map(item => <NavItem key={item.to} item={item} /> ) }
        </div>
     );
}

export default Nav;