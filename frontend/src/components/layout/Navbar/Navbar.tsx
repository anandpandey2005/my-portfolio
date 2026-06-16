import { Menu, X, Home, Briefcase, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > prevScrollY.current) {
        setIsVisible(false);
      } else if (currentScrollY < 100) {
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Work", path: "/my-work", icon: Briefcase },
    { name: "Experience", path: "/my-experience", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 w-full flex justify-center items-center p-4 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="relative flex justify-between items-center px-6 py-3 rounded-3xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link
              to="/"
              className="text-xl font-bold bg-neutral-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
            <picture>
  
           <img src="/Favicon_image.jpg" alt="AP"/>
            </picture>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isCurrentActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-2 rounded-xl p-2 font-medium transition-colors duration-200 group ${
                      isCurrentActive ? "text-neutral-600" : "text-black"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform ${
                        isCurrentActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <Link
              to="/my-experience#get-in-touch"
              className="hidden md:block px-5 py-2 rounded-full bg-neutral-800 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contact
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-4 mx-4 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg md:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isCurrentActive = location.pathname === link.path;

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${
                        isCurrentActive ? "text-neutral-600" : "text-black"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/my-experience#get-in-touch"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white font-medium text-center hover:shadow-lg transition-all"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
