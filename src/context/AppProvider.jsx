import { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "Leonardo",
    image:
      "https://media.licdn.com/dms/image/D4D03AQH1kocLWfiPBw/profile-displayphoto-shrink_200_200/0/1683053737485?e=1703116800&v=beta&t=KiJfpseTpa7kxGFlfm2QnlaXQrgFyc1lfkjv_ING5js",
    email: "leonardo.martins@cotefacil.com",
  });

  const [path, setPath] = useState("");

  const context = {
    profile,
    setProfile,
    path,
    setPath,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
