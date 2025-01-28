import '../../styles/header.css'
import NavItem from './NavItem';
import data from '../../../data.json'


function Nav() {
    return(
        <nav className="main-nav">
            <img src={data.navbar.img} alt="" />
            <ul>
            {
                data.navbar.links.map((element, index) => {
                    return <NavItem key={index}>{element}</NavItem>
                })
            }
            </ul>

        </nav>
    )
}


export default Nav;