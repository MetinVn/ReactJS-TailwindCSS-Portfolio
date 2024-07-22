import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { HiHome, HiBriefcase, HiMail } from "react-icons/hi";
import useInView from "../hook/useInView";

// Component for individual navigation links
const NavLink = React.forwardRef(
  ({ to, smooth, duration, offset, onClick, children }, ref) => (
    <div ref={ref} className="relative">
      <Link
        to={to}
        smooth={smooth}
        duration={duration}
        offset={offset}
        onClick={onClick}
        className="flex items-center justify-center p-2 rounded-full cursor-pointer text-gray-700 z-10">
        {children}
      </Link>
    </div>
  )
);

const NavMenu = () => {
  const [selected, setSelected] = useState("home");
  const [style, setStyle] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const updatePosition = () => {
      const element = refs.current[selected];
      if (element) {
        const { top, left, width, height } = element.getBoundingClientRect();
        const container = element.parentElement.getBoundingClientRect();
        setStyle({
          top: top - container.top,
          left: left - container.left,
          width,
          height,
        });
      } else {
        console.error("Element not found:", selected);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [selected]);

  const isHomeInView = useInView("home");
  const isContactInView = useInView("contact");
  const isProjectsInView = useInView("projects");

  useEffect(() => {
    if (isHomeInView) {
      setSelected("home");
    }
    if (isContactInView) {
      setSelected("contact");
    }
    if (isProjectsInView) {
      setSelected("projects");
    }
  }, [isHomeInView, isContactInView, isProjectsInView]);

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 border shadow-md rounded-full p-3 z-50 backdrop-blur-sm">
      <nav className="flex flex-col gap-4 relative ">
        <div
          className="absolute bg-gray-300 rounded-full transition-all duration-500 ease-in-out"
          style={{
            top: style.top || "0",
            left: style.left || "0",
            width: style.width || "0",
            height: style.height || "0",
          }}
        />
        <NavLink
          to="home"
          smooth
          duration={500}
          onClick={() => setSelected("home")}
          ref={(el) => (refs.current.home = el)}>
          <HiHome className="text-xl" />
        </NavLink>
        <NavLink
          to="projects"
          smooth
          duration={500}
          offset={450}
          onClick={() => setSelected("projects")}
          ref={(el) => (refs.current.projects = el)}>
          <HiBriefcase className="text-xl" />
        </NavLink>
        <NavLink
          to="contact"
          smooth
          duration={500}
          onClick={() => setSelected("contact")}
          ref={(el) => (refs.current.contact = el)}>
          <HiMail className="text-xl" />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavMenu;
