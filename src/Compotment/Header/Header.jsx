import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [servicesHover, setServicesHover] = useState(false); // desktop hover
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile toggle

  const lastScroll = useRef(0);


  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Scroll effects
  useEffect(() => {
  const handleScroll = () => {
    const current = window.scrollY;

    setScrolled(current > 40);
    setHidden(current > lastScroll.current && current > 120);

    lastScroll.current = current; // ✅ FIXED

    const total =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setProgress((current / total) * 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/project" },
  ];

  const servicesList = [
    { name: "Decking", path: "/services/decking" },
    { name: "Fencing", path: "/services/fencing" },
    { name: "Patios", path: "/services/patios" },
    { name: "Privacy Screens", path: "/services/privacy-screens" },
    { name: "Retaining Walls", path: "/services/retaining-walls" },
    { name: "Rubber Soft Fall", path: "/services/rubber-soft-fall" },
  ];

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-green-500 to-emerald-500 z-[9999]"
        style={{ width: `${progress}%` }}
      />

      {/* Header */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${
          hidden ? "-top-24" : "top-0"
        } ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg h-16" : "bg-transparent h-20"}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-green-600">
            Turf & Timber
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {navItems.map((item) =>
              !item.hasDropdown ? (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative hover:text-green-700 transition ${
                      isActive
                        ? "text-green-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-700"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                // Services Dropdown Desktop
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesHover(true)}
                  onMouseLeave={() => setServicesHover(false)}
                >
                  {/* Clickable link to /services */}
                  <NavLink
                    to={item.path}
                    className="cursor-pointer hover:text-green-700 transition"
                  >
                    {item.name} ▾
                  </NavLink>

                  {/* Dropdown only on hover */}
                  {servicesHover && (
                    <div
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)} 
                    className="absolute  left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                      {servicesList.map((service) => (
                        <NavLink
                          key={service.name}
                          to={service.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-semibold text-gray-700">📞 +49 123 456 789</span>
            <NavLink
              to="/contact"
              className="px-6 py-2 rounded-lg text-white bg-green-700 hover:bg-green-800 transition"
            >
              Get Costing
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 relative"
          >
            <span
              className={`absolute h-0.5 w-8 bg-black transition ${
                isOpen ? "rotate-45 top-4" : "top-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-8 bg-black top-4 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-8 bg-black transition ${
                isOpen ? "-rotate-45 top-4" : "top-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-[280px] h-full bg-white shadow-2xl z-50 p-6 flex flex-col gap-6 overflow-y-auto">
          <button onClick={closeMenu} className="self-end text-2xl">
            ✕
          </button>
          {navItems.map((item) =>
            !item.hasDropdown ? (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="text-lg font-semibold hover:text-green-700"
              >
                {item.name}
              </NavLink>
            ) : (
              <div key={item.name}>
                {/* Clickable services link */}
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className="font-semibold"
                >
                  Services
                </NavLink>

                {/* Toggle button for mobile sublist */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="ml-2 text-xl font-bold"
                >
                  {mobileServicesOpen ? "−" : "+"}
                </button>

                {/* Collapsible service list */}
                {mobileServicesOpen && (
                  <div className="flex flex-col pl-4 mt-2 gap-1">
                    {servicesList.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        onClick={closeMenu}
                        className="text-gray-700 hover:text-green-700"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mt-4 px-4 py-2 rounded-lg bg-green-700 text-white text-center"
          >
            Get Costing
          </NavLink>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-40" />
      )}

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
