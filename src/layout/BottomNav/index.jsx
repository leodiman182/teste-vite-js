import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./styles.css";

export default function BottomNav() {
  const { path, locations, icon } = useContext(AppContext);

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-dark-color border-t-2 border-primary-color"
    >
      <div id="tabs" className="flex justify-between">
        {locations.map((loc, index) => (
          <Link
            to={loc.href}
            key={index}
            className="flex flex-col items-center w-full justify-center text-center py-[12px]"
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
