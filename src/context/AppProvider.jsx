import { useState } from "react";
import { AppContext } from "./AppContext";
import { RiHomeFill, RiSearchFill, RiCopilotFill } from "react-icons/ri";

export default function AppProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "Leonardo",
    image:
      "https://media.licdn.com/dms/image/D4D03AQH1kocLWfiPBw/profile-displayphoto-shrink_200_200/0/1683053737485?e=1703116800&v=beta&t=KiJfpseTpa7kxGFlfm2QnlaXQrgFyc1lfkjv_ING5js",
    email: "leonardo.martins@cotefacil.com",
  });

  const [path, setPath] = useState("");

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

  function textlessIcon(loc) {
    switch (loc.href) {
      case "/search":
        return (
          <RiSearchFill
            size={path === loc.href ? 25 : 20}
            className={
              path === loc.href
                ? "text-primary-color"
                : "text-primary-color-dark"
            }
          />
        );
      case "/profile":
        return (
          <RiCopilotFill
            size={path === loc.href ? 25 : 20}
            className={
              path === loc.href
                ? "text-primary-color"
                : "text-primary-color-dark"
            }
          />
        );
      default:
        return (
          <RiHomeFill
            size={path === loc.href ? 25 : 20}
            className={
              path === loc.href
                ? "text-primary-color"
                : "text-primary-color-dark"
            }
          />
        );
    }
  }

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

  const context = {
    profile,
    setProfile,
    path,
    setPath,
    locations,
    icon,
    textlessIcon,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
