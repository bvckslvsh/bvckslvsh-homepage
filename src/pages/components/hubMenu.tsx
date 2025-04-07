import React from "react";
import "./hubMenu.css";

const Menu = () => {
    const menuItems = ["About", "Experience", "Contact", "Blog"];

    return (
        <nav className="menu">
            <ul className="menu__list">
                {menuItems.map((item) => (
                    <li key={item} className="menu__item">
                        <a href={`#${item.toLowerCase()}`} className="menu__link">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
