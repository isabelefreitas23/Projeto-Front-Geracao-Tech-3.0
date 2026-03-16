import Logo from "./logo";
import SearchBar from "./searchBar";
import MainNav from "./mainNave";
import AuthLinks from "./authLinks";
import CartIcon from "./cartIcon";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">

      <div className="max-w-[1200px] mx-auto flex items-center gap-6 px-6 py-4">

        <Logo />

        <div className="flex-1">
          <SearchBar />
        </div>

        <AuthLinks />
        <CartIcon />

      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-3">
        <MainNav />
      </div>

    </header>
  );
};

export default Header;