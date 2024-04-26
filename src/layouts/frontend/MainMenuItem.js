import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuService from "../../services/MenuServices";

const MainMenuItem = (props) => {
  const menu = props.menu;
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const result = await MenuService.mainmenu(menu.id, 10,1);
      setMenus(result.menus);
    };
    fetchMenus();
  }, [menu.id]);

  return (
    <>
      {menus && menus.length > 0 ? (
        <li className="nav-item dropdown ">
          <Link
            className="nav-link "
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {menu.name}
          </Link>
          <ul className="dropdown-menu " >
            {menus.map((menusub, index) => (
              <li key={index}>
                <Link className="dropdown-item" to={`/${menusub.link}`}>
                  {menusub.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={menu.link}>
            {menu.name}
          </Link>
        </li>
      )}
    </>
  );
};

export default MainMenuItem;
