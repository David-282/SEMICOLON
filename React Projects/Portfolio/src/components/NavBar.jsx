import {NavLink} from "react-router-dom";


const NavBar = () => {

    return(
        <header>
            <nav>
                <ul>
                    <li> <NavLink to ="/"> Home </NavLink>    </li>
                    <li> <NavLink to ="about/"> About </NavLink>   </li>
                    <li> <NavLink to ="/project"> Project </NavLink>   </li>
                    <li> <NavLink to ="/stack"> Stack </NavLink>    </li>

                </ul>
            </nav>
        </header>
    );
};

export default NavBar;