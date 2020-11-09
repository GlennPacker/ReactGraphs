import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
    const navItems = [{
        id: "line",
        label: 'Line',
        to: '/line'
    }, {
        id: "pie",
        label: 'Pie',
        to: '/pie'
    }, {
        id: "bar",
        label: 'Bar',
        to: '/bar'
    }]

    return (
        <div className="nav" style={{ display: 'flex', flexDirection: 'column'}}>
            { navItems.map(item => <NavItem key={item.to} item={item} /> ) }
        </div>
     );
}

export default Nav;