import iconName from "../assets/icons/Header/TitleIcon.svg";
import iconProfile from "../assets/icons/Header/ProfileIcon.svg";
import iconShop from "../assets/icons/Header/ShopIcon.svg";

function Header() {
  return (
    <div className="h-[100px] w-full px-8 flex items-center justify-between">
      <img src={iconName} alt="Furniro icon" className="w-auto h-10" />

      <nav className="flex gap-10 font-bold">
        <a href="/" className="hover:text-gray-500">
          Home
        </a>
        <a href="/shop" className="hover:text-gray-500">
          Shop
        </a>
        <a href="/about" className="hover:text-gray-500">
          About
        </a>
        <a href="/contact" className="hover:text-gray-500">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <img src={iconProfile} alt="Profile icon" className="w-6 h-6" />
        <img src={iconShop} alt="Shop icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Header;
