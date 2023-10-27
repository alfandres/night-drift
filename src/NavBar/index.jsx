import React from "react";
import { NavLink } from "react-router-dom";

function NavBar (){

    return(
        <nav>
            <ul>
                { routes.map(route => (
                    <li>
                        <NavLink
                            style={({isActive}) => ({
                                color: isActive ? 'blue' : 'black',
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
                        style={({isActive}) => ({
                            color: isActive ? 'blue' : 'black',
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
    to: '/car',
    text: 'Car',
});
routes.push({
    to: '/top-channels',
    text: 'Top-Channels',
});


export { NavBar };