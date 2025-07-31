/**
 * @copyright 2025 AnchorMovies
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useRef,useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    const link = lastActiveLink.current;
    activeBox.current.style.top = lastActiveLink.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (e) => {
    if (!e.target.classList.contains("nav-link")) return;
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`} onClick={activeCurrentLink}>
      {navItems.map(({ label, link }, i) => (
        <a
          href={link}
          key={i}
          className={`nav-link ${i === 0 ? "active" : ""}`}
          ref={i === 0 ? lastActiveLink : null}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
