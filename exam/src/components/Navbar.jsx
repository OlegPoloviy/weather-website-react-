import {NavLink} from "react-router-dom";
import "../styles/navbar.scss"

export function Navbar(){
    return(
        <>
            <div className={"navbar"}>
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={"*"}>
                        <li>To map</li>
                    </NavLink>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}