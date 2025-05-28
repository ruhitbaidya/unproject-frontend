import Logo from "@/assets/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto px-[10px] py-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex gap-[25px]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
