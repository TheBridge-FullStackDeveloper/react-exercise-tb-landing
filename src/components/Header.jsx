import "../styles/Header.css";
import data from "../../data.json"

function Header() {
return (
    <>
    <header className="header">
    <nav className="nav-bar">
        <img src={data.navbar.img} alt="" />

        <ul>
        {
            data.navbar.links.map((element)=>{
                return <li key={element}> 
                    {element}
                </li>
            })
        }
        </ul>
    </nav>
    </header>
    </>
);
}

export default Header;
