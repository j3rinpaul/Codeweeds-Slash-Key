import React from 'react'

function Sidebar() {
  return (
    <div>
        
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
            <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-clipboard"></i><span>C</span>
            </a>
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-clipboard"></i><span>Python</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>LogOut</span>
            </a>
        </li>   
        </ul>

    </aside>


    </div>
  )
}

export default Sidebar