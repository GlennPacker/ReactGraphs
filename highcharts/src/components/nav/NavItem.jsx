import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const NavItem = ({item}) => {
    const activeStyle = {
        color: '#999',
        cursor: 'not-allowed'
    }

    return (
        <NavLink
            className={item.id}
            to={item.to}
            exact
            activeStyle={activeStyle}
        >
            { item.label }
        </NavLink>
    );
}

export default NavItem;