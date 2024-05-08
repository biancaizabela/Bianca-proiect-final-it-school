import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


export function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }
  
  let dropdownMenuClasses = "custom-dropdown-menu";
  if (isDisplayed) {
    dropdownMenuClasses += " display-mobile-menu";
  }

  return (
    <header className="Header">
      <nav className="nav w-100" >
        <div className="d-flex justify-content-between align-items-center">

        <Link to="/" className="p-2">
        <div className="logo" style={{ display: "flex", alignItems: "left" }}>
    				<img src="https://seeklogo.com/images/A/adalet-logo-551A396F76-seeklogo.com.png" 
        			alt="lawyer logo" 
        			style={{ width: "50px", height: "auto" }} 
    				/>
				</div>
          </Link>

          <div className="menu-icon-container" style={{alignItems: "right"}}>
            <span
              onClick={handleMenuClick}
              className="material-icons menu-icon text-light"> Menu 
            </span> 
            
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
              <Link to="/"> Home 
              </Link>

              </li>


              <li className={isDisplayed ? "container" : null}>
              <Link to="/about"> About us </Link>
              </li>


              <li className={isDisplayed ? "container" : null}>
              <Link to="/expertise"> Expertise </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
              <Link to="/contact"> Contact </Link>
              </li>
            </ul>


            </div>




{/*
      <Link to="/" className="p-3"> Home </Link>

      
       Aici sa adaugati link-uri catre paginile voastre 
      
      <Link to="/about"> About us </Link>
      <Link to="/expertise"> Our expertise </Link>
      <Link to="/contact"> Contact </Link>
*/}
        </div>
      </nav>
    </header>

  );
}

export default Header;