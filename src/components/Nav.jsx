import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import Clock from "./Clock";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECT", href: "#project" },
  { label: "CONTACT", href: "#contact" },
];

function Nav() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState("home");

  // data-theme attribute drives CSS variable switching
  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isLight]);

  // Scroll spy
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 600) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-1000">
      {/* ── Clock topbar ── */}
      <div className="flex justify-center items-center h-7 bg-nav border-b border-border backdrop-blur-md">
        <Clock />
      </div>

      {/* ── Main nav ── */}
      <nav className="flex items-center justify-between px-16 h-70px bg-nav border-b border-border backdrop-blur-md transition-all duration-300 max-[1024px]:px-8 max-[768px]:px-6">
        {/* Logo */}
        <a href="#home" aria-label="Go to home">
          <div className="flex items-center justify-center w-9 h-9 font-mono font-bold text-base text-btn-text bg-teal rounded-lg transition-all duration-300 hover:-rotate-8deg hover:scale-105">
            WA
          </div>
        </a>

        {/* Pill nav — hidden on mobile */}
        <div className="flex items-center gap-1 border border-border rounded-[30px] p-1 bg-card max-[600px]:hidden">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                className={`font-mono text-xs font-bold tracking-0.1em px-18px py-2 rounded-[20px] transition-all duration-300
                  ${
                    isActive
                      ? "text-primary bg-teal-light"
                      : "text-muted hover:text-primary hover:bg-teal-light"
                  }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setIsLight((p) => !p)}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-38px h-38px rounded-full border border-border text-primary bg-transparent transition-all duration-300 hover:bg-teal-light hover:border-teal hover:text-teal hover:rotate-15deg"
          >
            {isLight ? <BsMoon size={16} /> : <BsSun size={16} />}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="hidden flex-col justify-center items-center gap-5px bg-transparent border-none cursor-pointer p-1 max-[600px]:flex"
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-nav border-b border-border backdrop-blur-md">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-center py-4 font-mono text-xs font-bold tracking-0.1em border-b border-border transition-all duration-300
                  ${
                    isActive
                      ? "text-teal bg-teal-light"
                      : "text-muted hover:text-teal hover:bg-teal-light"
                  }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Nav;
