import React, { useState, useContext } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/techLogo.png';
import { AuthContext } from '../context/auth';

function MenuBar() {
  const { author, logout } = useContext(AuthContext);

  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = author ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={author.authorName} active as={Link} to="/" />

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Image id="techLogo" src={Logo} />
      <Menu.Item
        id="title"
        name="Tech-Knowledg-E"
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
        <Menu.Item
          name="contact"
          active={activeItem === 'contact'}
          onClick={handleItemClick}
          as={Link}
          to="/contact"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
