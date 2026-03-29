import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "education",
    "projects",
    "skills",
    "contact",
  ];

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((id) => document.getElementById(id));

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section.id);
          }
        }
      });

      // detect bottom (for last section like contact)
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
      px-8 py-3 rounded-full transition-all duration-300 
      backdrop-blur-md ${
        scrolled
          ? "bg-white/90 text-black shadow-lg"
          : "bg-white/10 text-white border border-white/20"
      }`}
    >
      {/* Desktop */}
      <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`relative transition ${
                active === item ? "font-semibold" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-current transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-1/2 -translate-x-1/2 
          bg-black text-white rounded-xl shadow-lg p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-center"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
