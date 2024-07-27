import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { HiHome, HiBriefcase, HiMail, HiDocumentText } from "react-icons/hi";
import useInView from "../hook/useInView";

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
  const isSummaryInView = useInView("summary");

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
    if (isSummaryInView) {
      setSelected("summary");
    }
  }, [isHomeInView, isContactInView, isProjectsInView, isSummaryInView]);

  return (
    <div className="fixed top-10 left-[50%] transform -translate-x-1/2 sm:top-[20%] sm:left-5 md:left-10 md:top-1/2 sm:transform sm:-translate-y-1/3 md:-translate-y-1/2 z-50 ">
      <nav className="flex flex-row sm:flex-col gap-1 sm:gap-4 relative">
        <div
          className="absolute  border-b border-l-0 border-b-blue-600 sm:border-b-0 sm:border-l border-l-blue-600 transition-all duration-500 ease-in-out"
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
          duration={600}
          onClick={() => setSelected("home")}
          ref={(el) => (refs.current.home = el)}
          className="text-sm sm:text-xl">
          <HiHome className="hover:opacity-50" color="white" />
        </NavLink>
        <NavLink
          to="summary"
          smooth
          duration={600}
          onClick={() => setSelected("summary")}
          ref={(el) => (refs.current.summary = el)}
          className="text-sm sm:text-xl">
          <HiDocumentText className="hover:opacity-50" color="white" />
        </NavLink>
        <NavLink
          to="projects"
          smooth
          duration={600}
          onClick={() => setSelected("projects")}
          ref={(el) => (refs.current.projects = el)}
          className="text-sm sm:text-xl">
          <HiBriefcase className="hover:opacity-50" color="white" />
        </NavLink>
        <NavLink
          to="contact"
          smooth
          duration={600}
          onClick={() => setSelected("contact")}
          ref={(el) => (refs.current.contact = el)}
          className="text-sm sm:text-xl">
          <HiMail className="hover:opacity-50" color="white" />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavMenu;
