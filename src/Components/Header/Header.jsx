
import "./Header.css"
function Header() {
  return (
    <div className="header">
        <nav className="header-nav">
            <h2 className="header-title">Logo</h2>
            <ul className="nav-list">
                <li className="nav-items"> <a href="">Home</a></li>
                <li className="nav-items"> <a href="">About</a></li>
                <li className="nav-items"><a href="">services</a></li>
                <li className="nav-items"><a href="">Portfolio</a></li>
                <li className="nav-items"><a href="">Contacts</a></li>
            </ul>

        </nav>
      
    </div>
  )
}

export default Header
