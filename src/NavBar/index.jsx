import React from "react";
import { NavLink } from "react-router-dom";
import svg from "../assets/svg";

function NavBar (){

    return(
        <nav className=' bg-blanco-hueso-50 w-full h-10 flex items-center justify-between px-3'>
            <ul className='flex gap-2'>
                <li>
                    <NavLink to='/'>
                        <img className='w-8' src={svg.logo} alt='logo-night-drift' />
                    </NavLink>
                </li>
                { routes.map(route => (
                    <li>
                        <NavLink
                            className=' font-russo-one'
                            style={({isActive}) => ({
                                color: isActive ? '#FFA41B' : '#0D1B2A',
                            }) }
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <ul>
                <li>
                    <NavLink 
                        className=' font-russo-one'
                        style={({isActive}) => ({
                            color: isActive ? '#FFA41B' : '#0D1B2A',
                        }) }
                        to='/profile'
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

const routes = [];

routes.push({
    to: '/',
    text: 'Home',
});
routes.push({
    to: '/top-channels',
    text: 'Top-Channels',
});
routes.push({
    to: '/car',
    text: 'Car',
});
routes.push({
    to: '/store',
    text: 'Store',
});

export { NavBar };