function Header() {
    return (
      <header className="navbar">
        <div className="logo">
            <img src="logo.png" alt="Dtech Logo" />
            <span>dtech.</span>
            <img src="vision-2030.png" alt="Vision 2030" />
        </div>

        <nav>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li className="dropdown">
                    <a href="#">Services ▼</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Service 1</a></li>
                        <li><a href="#">Service 2</a></li>
                    </ul>
                </li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">ClickUp Licensing</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>

        <a href="#" className="schedule-btn">
            Schedule a Call <span className="arrow">→</span>
        </a>
      </header>
    );
  }
  
  export default Header;