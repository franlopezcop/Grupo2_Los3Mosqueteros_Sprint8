import { Link } from "react-router-dom";

import image from "../assets/images/logo-DH.png";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/*<!-- Sidebar - Brand -->*/}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={image} alt="Digital House" />
        </div>
      </a>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider my-0" />

      {/*<!-- Nav Item - Dashboard -->*/}
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </Link>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider" />

      {/*<!-- Heading -->*/}
      <div className="sidebar-heading">Actions</div>

      {/*<!-- Nav Item - Search Movies -->*/}
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/search-movies">
          <i className="fas fa-fw fa-search"></i>
          <span>Search Movies</span>
        </Link>
      </li>

      {/*<!-- Nav Item - Content Movies -->*/}
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/content-movies">
          <i className="fas fa-fw fa-folder"></i>
          <span>Content Movies</span>
        </Link>
      </li>

      {/*<!-- Nav Item - Last Movie In Db -->*/}
      <li className="nav-item">
        <Link className="nav-link" to="/last-movie-in-db">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Last Movie In Db</span>
        </Link>
      </li>

      {/*<!-- Nav Item - Genres In Db -->*/}
      <li className="nav-item">
        <Link className="nav-link" to="/genres-in-db">
          <i className="fas fa-fw fa-film"></i>
          <span>Genres In Db</span>
        </Link>
      </li>

      {/*<!-- Nav Item - Movies Chart -->*/}
      <li className="nav-item">
        <Link className="nav-link" to="/movies-chart">
          <i className="fas fa-fw fa-table"></i>
          <span>Movies Chart</span>
        </Link>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
