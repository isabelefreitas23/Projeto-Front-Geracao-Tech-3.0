import { NavLink } from "react-router-dom";

const MainNav = () => {

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-bold border-b-2 border-pink-600 pb-1"
      : "text-gray-300 font-bold hover:text-pink-600";

  return (
    <nav className="flex gap-6 text-sm">

      <NavLink to="/" end className={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/categorias" className={linkStyle}>
        Categorias
      </NavLink>

      <NavLink to="/produtos" className={linkStyle}>
        Produtos
      </NavLink>

      <NavLink to="/pedidos" className={linkStyle}>
        Meus Pedidos
      </NavLink>

    </nav>
  );
};

export default MainNav;