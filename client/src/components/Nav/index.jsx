import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"><img className="imagesize" src="/images/FEDS.png" alt="" /></span>
    
        </Link>
      </h1>

      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: '9' }}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-4 text-primary"><img src="" alt="" /></h1>
                </a>
               
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="#Home" onClick={() => handlePageChange('Home')} className="nav-item nav-link active"> Home  </a>
                        
                      
                        <a href="#Products" onClick={() => handlePageChange('menu')} className="nav-item nav-link">    menu </a>
                    </div>
                    <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                        <h1 className="m-0 display-4 title-color"><span className="title-secondary-color"></span></h1>
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                        <a href="#Gallery" onClick={() => handlePageChange('Gallery')} className="nav-item nav-link"> Gallery </a>
                        <a href="#Reviews" onClick={() => handlePageChange('Reviews')} className="nav-item nav-link"> Reviews </a>
                        <a href="#About" onClick={() => handlePageChange('About')} className="nav-item nav-link"> About </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
