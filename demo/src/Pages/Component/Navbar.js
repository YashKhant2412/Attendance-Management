import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from "../../Css/component/navbar.module.css"

const Navbar =() => {
  return (<>
 
    <div className={css.navbar}>
      <ul>
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
      </ul>
    </div>

<Outlet /> </>
  );
}

export default Navbar;
