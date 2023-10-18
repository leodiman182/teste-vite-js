import { RiHomeFill, RiSearchFill, RiCopilotFill } from "react-icons/ri";
import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

export default function BottomNav() {
  const { path } = useContext(AppContext);

  const locations = [
    {
      name: "Search",
      href: "/search",
      icon: RiSearchFill,
    },
    {
      name: "Home",
      href: "/",
      icon: RiHomeFill,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: RiCopilotFill,
    },
  ];

  function icon(loc) {
    switch (loc.href) {
      case "/search":
        return (
          <RiSearchFill
            size={path === loc.href ? 25 : 20}
            className={
              path === loc.href ? "text-primary-color" : "text-light-color"
            }
          />
        );
      case "/profile":
        return (
          <RiCopilotFill
            size={path === loc.href ? 25 : 20}
            className={
              path === loc.href ? "text-primary-color" : "text-light-color"
            }
          />
        );
      default:
        return (
          <RiHomeFill
            size={path === loc.href ? 25 : 20}
            className={
              path === loc.href ? "text-primary-color" : "text-light-color"
            }
          />
        );
    }
  }

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 "
    >
      <div id="tabs" className="flex justify-between">
        {locations.map((loc, index) => (
          <Link
            to={loc.href}
            key={index}
            className="flex flex-col items-center w-full justify-center text-center pt-[5px] pb-[12px]"
          >
            {icon(loc)}
            <p
              className={
                path === loc.href
                  ? "text-primary-color font-bold"
                  : "text-light-color"
              }
            >
              {loc.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
