import "../styles/header.scss";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import {
  SearchIcon,
  CartIcon,
  MoonIcon,
  LogoIcon,
  ToggleIcon,
} from "../assets/icons/FontAwesome";

const Header = () => {
  return (
    <section className="site-header">
      <div className="header-container">
        {/* navbar-toggle  */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" className="burger-container">
          <ToggleIcon className="navbar-toggle" />
        </label>

        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list">
            <li className="nav-item">
              <a className="nav-link" href="/">
                首頁
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/men">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/women">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/customized">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                聯絡我們
              </a>
            </li>
          </ul>

          <ul className="nav-list site-action-list">
            <li className="nav-item">
              <SearchIcon className="nav-icon"></SearchIcon>
            </li>
            <li className="nav-item">
              <CartIcon className="nav-icon"></CartIcon>
            </li>
            <li className="nav-item">
              <MoonIcon className="nav-icon"></MoonIcon>
            </li>
          </ul>
        </nav>
        <div className="header-logo-container">
          <Logo className="header-logo-svg" style={{ fill: "black" }}></Logo>
        </div>
      </div>
    </section>
  );
};

export default Header;
