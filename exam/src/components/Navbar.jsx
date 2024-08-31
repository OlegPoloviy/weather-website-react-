import {NavLink} from "react-router-dom";
import "../styles/navbar.scss"

export function Navbar(){
    return(
        <>
            <div className={"navbar"}>
                <ul>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={"/map"} className={({ isActive }) => isActive ? 'active' : ''}>
                        <li>To map</li>
                    </NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => isActive ? 'active' : ''}>
                        <li>About this project</li>
                    </NavLink>
                    <NavLink to={"/stat"} className={({ isActive }) => isActive ? 'active' : ''}>
                        <li>See more information about weather</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}