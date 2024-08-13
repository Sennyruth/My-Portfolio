
import "./Header.css"

  function showSidebar(event){
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(event){
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'

  }
function Header() {
  return (
    <div className="header">
    
        <nav className="header-nav">
              <h2 className="header-title">Logo</h2>
            <ul className="sidebar">
                <li onClick={hideSidebar}> <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li className="#"> <a href="">Home</a></li>
                <li className="#"> <a href="">About</a></li>
                <li className="#"><a href="">services</a></li>
                <li className="#"><a href="">Portfolio</a></li>
                <li className="#"><a href="">Contacts</a></li>
            </ul>
            <ul className="nav-list">
                <li className="nav-items"> <a href="">Home</a></li>
                <li className="nav-items"> <a href="">About</a></li>
                <li className="nav-items"><a href="">services</a></li>
                <li className="nav-items"><a href="">Portfolio</a></li>
                <li className="nav-items"><a href="">Contacts</a></li>
                
                <li className="button-menu" onClick={showSidebar} ><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>

            </ul>

        </nav>
      
    </div>
  )
}

export default Header
