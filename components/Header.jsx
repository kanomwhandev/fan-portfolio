import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center  ">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            Portfolio<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center px-2 py-4 rounded-full text-white/70 text-sm font-semibold bg-white/5  ">
          <Nav />
          <Link href="/contact" className=" container mx-auto ">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
