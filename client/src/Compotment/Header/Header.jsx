import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const lastScroll = useRef(0);

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
      lastScroll.current = current;

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

  return (
    <>
      {/* Top Line */}
      <div className="w-full h-10 bg-green-700 text-white text-center text-xs sm:text-sm md:text-base py-1 sm:py-1.5 md:py-2 fixed top-0 left-0 z-50">
        Brisbane’s #1 One-Stop-Shop for Eco-Friendly Synthetic Grass
      </div>

      {/* Spacer for top line */}
      <div className="h-6 sm:h-10 md:h-10" />

      {/* Scroll Progress */}
      <div
        className="fixed top-10 sm:top-6 md:top-10 left-0 h-[3px] bg-gradient-to-r from-green-500 to-emerald-500 z-[9999] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      {/* Header */}
      <header
        className={`fixed left-0 w-full z-50 bg-white transition-all duration-500 ${
          hidden ? "-top-24" : "top-10 sm:top-6 md:top-10"
        } ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md h-16 sm:h-20 md:h-24" : "bg-transparent h-16 sm:h-20 md:h-24"}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-2xl sm:text-2xl md:text-3xl font-bold text-green-600">
            Turf & Timber
          </NavLink>

         {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700 relative">
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
                <div key={item.name} className="relative group">
                  <NavLink
                    to={item.path}
                    className="flex items-center gap-1 cursor-pointer hover:text-green-700 transition select-none"
                  >
                    {item.name} ▾
                  </NavLink>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                    {servicesList.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>
          {/* Desktop CTA */}
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
            className="md:hidden w-8 h-8 flex flex-col justify-between items-center relative z-50"
          >
            <span
              className={`block h-0.5 w-8 bg-black rounded transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-black rounded transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-black rounded transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col p-6 gap-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo + Close */}
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-green-600">
            Turf & Timber
          </NavLink>
          <button onClick={closeMenu} className="text-2xl font-bold">
            ✕
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-4 mt-4 text-lg">
          {navItems.map((item) =>
            !item.hasDropdown ? (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="font-semibold hover:text-green-700"
              >
                {item.name}
              </NavLink>
            ) : (
              <div key={item.name} className="flex flex-col gap-1">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between items-center font-semibold hover:text-green-700"
                >
                  {item.name} {mobileServicesOpen ? "−" : "+"}
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col pl-4 mt-1 gap-1">
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
        </div>

        {/* Mobile CTA */}
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="mt-6 px-4 py-2 rounded-lg bg-green-700 text-white text-center"
        >
          Get Costing
        </NavLink>
      </div>

      {/* Overlay */}
      {isOpen && <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-30" />}

      {/* Spacer */}
      <div className="h-20 md:h-16"></div>
    </>
  );
};

export default Header;


// import React, { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [servicesHover, setServicesHover] = useState(false); // desktop hover
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile toggle

//   const lastScroll = useRef(0);


//   // Disable body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//   }, [isOpen]);

//   // Scroll effects
//   useEffect(() => {
//   const handleScroll = () => {
//     const current = window.scrollY;

//     setScrolled(current > 40);
//     setHidden(current > lastScroll.current && current > 120);

//     lastScroll.current = current; // ✅ FIXED

//     const total =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;

//     setProgress((current / total) * 100);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);


//   const closeMenu = () => {
//     setIsOpen(false);
//     setMobileServicesOpen(false);
//   };

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Blog", path: "/blog" },
//     { name: "Services", path: "/services", hasDropdown: true },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Projects", path: "/project" },
//   ];

//   const servicesList = [
//     { name: "Decking", path: "/services/decking" },
//     { name: "Fencing", path: "/services/fencing" },
//     { name: "Patios", path: "/services/patios" },
//     { name: "Privacy Screens", path: "/services/privacy-screens" },
//     { name: "Retaining Walls", path: "/services/retaining-walls" },
//     { name: "Rubber Soft Fall", path: "/services/rubber-soft-fall" },
//   ];

//   return (
//     <>
//       {/* Scroll progress */}
//       <div
//         className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-green-500 to-emerald-500 z-[9999]"
//         style={{ width: `${progress}%` }}
//       />

//       {/* Header */}
//       <header
//         className={`fixed left-0 w-full z-50 transition-all duration-500 ${
//           hidden ? "-top-24" : "top-0"
//         } ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg h-16" : "bg-transparent h-20"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

//           {/* Logo */}
//           <NavLink to="/" className="text-2xl font-bold text-green-600">
//             Turf & Timber
//           </NavLink>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
//             {navItems.map((item) =>
//               !item.hasDropdown ? (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `relative hover:text-green-700 transition ${
//                       isActive
//                         ? "text-green-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-700"
//                         : ""
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ) : (

// // ✅ Proper hover dropdown parent
//                 <div key={item.name} className="relative group">
//                   <NavLink
//                     to={item.path}
//                     className="flex items-center gap-1 cursor-pointer hover:text-green-700 transition select-none"
//                   >
//                     {item.name} ▾
//                   </NavLink>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                     {servicesList.map((service) => (
//                       <NavLink
//                         key={service.name}
//                         to={service.path}
//                         className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
//                       >
//                         {service.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               )
//             )}
//           </nav>
//           {/* Right: CTA */}
//           <div className="hidden md:flex items-center gap-4">
//             <span className="font-semibold text-gray-700">📞 +49 123 456 789</span>
//             <NavLink
//               to="/contact"
//               className="px-6 py-2 rounded-lg text-white bg-green-700 hover:bg-green-800 transition"
//             >
//               Get Costing
//             </NavLink>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden w-8 h-8 relative"
//           >
//             <span
//               className={`absolute h-0.5 w-8 bg-black transition ${
//                 isOpen ? "rotate-45 top-4" : "top-2"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-8 bg-black top-4 transition ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-8 bg-black transition ${
//                 isOpen ? "-rotate-45 top-4" : "top-6"
//               }`}
//             />
//           </button>
//         </div>
//       </header>

//       {/* Mobile Drawer */}
//       {isOpen && (
//         <div className="fixed top-0 right-0 w-[280px] h-full bg-white shadow-2xl z-50 p-6 flex flex-col gap-6 overflow-y-auto">
//           <button onClick={closeMenu} className="self-end text-2xl">
//             ✕
//           </button>
//           {navItems.map((item) =>
//             !item.hasDropdown ? (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={closeMenu}
//                 className="text-lg font-semibold hover:text-green-700"
//               >
//                 {item.name}
//               </NavLink>
//             ) : (
//               <div key={item.name}>
//                 {/* Clickable services link */}
//                 <NavLink
//                   to={item.path}
//                   onClick={closeMenu}
//                   className="font-semibold"
//                 >
//                   Services
//                 </NavLink>

//                 {/* Toggle button for mobile sublist */}
//                 <button
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   className="ml-2 text-xl font-bold"
//                 >
//                   {mobileServicesOpen ? "−" : "+"}
//                 </button>

//                 {/* Collapsible service list */}
//                 {mobileServicesOpen && (
//                   <div className="flex flex-col pl-4 mt-2 gap-1">
//                     {servicesList.map((service) => (
//                       <NavLink
//                         key={service.name}
//                         to={service.path}
//                         onClick={closeMenu}
//                         className="text-gray-700 hover:text-green-700"
//                       >
//                         {service.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )
//           )}
//           <NavLink
//             to="/contact"
//             onClick={closeMenu}
//             className="mt-4 px-4 py-2 rounded-lg bg-green-700 text-white text-center"
//           >
//             Get Costing
//           </NavLink>
//         </div>
//       )}

//       {/* Overlay */}
//       {isOpen && (
//         <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-40" />
//       )}

//       {/* Spacer */}
//       <div className="h-20"></div>
//     </>
//   );
// };

// export default Header;


// import React, { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false); // Mobile menu
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Mobile toggle

//   const lastScroll = useRef(0);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Blog", path: "/blog" },
//     { name: "Services", path: "/services", hasDropdown: true },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Projects", path: "/project" },
//   ];

//   const servicesList = [
//     { name: "Decking", path: "/services/decking" },
//     { name: "Fencing", path: "/services/fencing" },
//     { name: "Patios", path: "/services/patios" },
//     { name: "Privacy Screens", path: "/services/privacy-screens" },
//     { name: "Retaining Walls", path: "/services/retaining-walls" },
//     { name: "Rubber Soft Fall", path: "/services/rubber-soft-fall" },
//   ];

//   // Disable body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//   }, [isOpen]);

//   // Scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.scrollY;
//       setScrolled(current > 40);
//       setHidden(current > lastScroll.current && current > 120);
//       lastScroll.current = current;

//       const total =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       setProgress((current / total) * 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMenu = () => {
//     setIsOpen(false);
//     setMobileServicesOpen(false);
//   };

//   return (
//     <>
//       {/* Top Line */}
//       <div className="w-full bg-green-700 text-white text-center text-sm md:text-base py-1 z-50 fixed top-0 left-0">
//         Brisbane’s #1 One-Stop-Shop for Eco-Friendly Synthetic Grass
//       </div>

//       {/* Spacer to push main header down below top line */}
//       <div className="h-6 md:h-6"></div>

//       {/* Scroll Progress */}
//       <div
//         className="fixed top-7 left-0 h-[3px] bg-gradient-to-r from-green-500 to-emerald-500 z-[9999] transition-all duration-200"
//         style={{ width: `${progress}%` }}
//       />
//       {/* Header */}
//       <header
//         className={`fixed left-0 w-full z-50 transition-all duration-500 ${
//           hidden ? "-top-24" : "top-7"
//         } ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md h-16" : "bg-transparent h-20"}`}
//       >
//         <div className="max-w-7xl  mx-auto px-4 md:pb-5 h-full flex items-center justify-between relative">
//           {/* Logo */}
//           <NavLink
//             to="/"
//             className="text-2xl font-bold text-green-600 z-50"
//           >
//             Turf & Timber
//           </NavLink>


//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 relative">
//             {navItems.map((item) =>
//               !item.hasDropdown ? (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `relative hover:text-green-700 transition ${
//                       isActive
//                         ? "text-green-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-700"
//                         : ""
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ) : (
//                 // ✅ Proper hover dropdown parent
//                 <div key={item.name} className="relative group">
//                   <NavLink
//                     to={item.path}
//                     className="flex items-center gap-1 cursor-pointer hover:text-green-700 transition select-none"
//                   >
//                     {item.name} ▾
//                   </NavLink>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                     {servicesList.map((service) => (
//                       <NavLink
//                         key={service.name}
//                         to={service.path}
//                         className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
//                       >
//                         {service.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               )
//             )}
//           </nav>
//           {/* Desktop CTA */}
//           <div className="hidden md:flex items-center gap-4">
//             <span className="font-semibold text-gray-700">📞 +49 123 456 789</span>
//             <NavLink
//               to="/contact"
//               className="px-6 py-2 rounded-lg text-white bg-green-700 hover:bg-green-800 transition"
//             >
//               Get Costing
//             </NavLink>
//           </div>

//           {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden w-8 h-8 flex flex-col justify-between items-center relative z-50"
//         >
//           <span
//             className={`block h-0.5 w-8 bg-black rounded transform transition duration-300 ${
//               isOpen ? "rotate-45 translate-y-3" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 w-8 bg-black rounded transition duration-300 ${
//               isOpen ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 w-8 bg-black rounded transform transition duration-300 ${
//               isOpen ? "-rotate-45 -translate-y-3" : ""
//             }`}
//           />
//         </button>
//         </div>
//       </header>

//       {/* Mobile Overlay Menu */}
            
//       {/* Mobile Drawer */}
//       <div
//       className={`fixed inset-0 bg-white z-40 flex flex-col p-6 gap-6 transform transition-transform duration-300 ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       {/* Logo + Close */}
//       <div className="flex items-center justify-between">
//         {/* <NavLink to="/" className="text-2xl font-bold text-green-600">
//           Turf & Timber
//         </NavLink>
//         <button onClick={closeMenu} className="text-2xl font-bold">
//           ✕
//         </button> */}
//       </div>

//         {/* Nav Items */}
//         <div className="flex flex-col gap-4 mt-4 text-lg">
//           {navItems.map((item) =>
//             !item.hasDropdown ? (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={closeMenu}
//                 className="font-semibold hover:text-green-700"
//               >
//                 {item.name}
//               </NavLink>
//             ) : (
//               <div key={item.name} className="flex flex-col gap-1">
//                 <button
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   className="flex justify-between items-center font-semibold hover:text-green-700"
//                 >
//                   {item.name} {mobileServicesOpen ? "−" : "+"}
//                 </button>

//                 {mobileServicesOpen && (
//                   <div className="flex flex-col pl-4 mt-1 gap-1">
//                     {servicesList.map((service) => (
//                       <NavLink
//                         key={service.name}
//                         to={service.path}
//                         onClick={closeMenu}
//                         className="text-gray-700 hover:text-green-700"
//                       >
//                         {service.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )
//           )}
//         </div>

//         {/* Mobile CTA */}
//         <NavLink
//           to="/contact"
//           onClick={closeMenu}
//           className="mt-6 px-4 py-2 rounded-lg bg-green-700 text-white text-center"
//         >
//           Get Costing
//         </NavLink>
//       </div>

//       {/* Overlay background */}
//       {isOpen && (
//         <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-30" />
//       )}

//       {/* Spacer */}
//       <div className="h-20 md:h-16"></div>
//     </>
//   );
// };

// export default Header;
