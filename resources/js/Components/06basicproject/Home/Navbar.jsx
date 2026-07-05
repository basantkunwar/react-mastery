import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/70 to-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Left */}
        <div className="flex items-center gap-12">
          <h1 className="cursor-pointer text-4xl font-extrabold tracking-wide text-red-600">
            NETFLIX
          </h1>

          <ul className="hidden items-center gap-8 text-base font-medium text-white md:flex">
            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-red-500">
              Home
            </li>

            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-red-500">
              TV Shows
            </li>

            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-red-500">
              Movies
            </li>

            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-red-500">
              New & Popular
            </li>

            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-red-500">
              My List
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <Search
            className="cursor-pointer text-white transition duration-300 hover:scale-110 hover:text-red-500"
            size={24}
          />

          <button className="rounded-md bg-red-600 px-5 py-2 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 active:scale-95">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;