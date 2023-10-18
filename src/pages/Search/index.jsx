/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMount } from "../../hooks/useIsMount";
import { AppContext } from "../../context/AppContext";

export default function Search() {
  const location = useLocation();
  const { setPath } = useContext(AppContext);
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      const { pathname } = location;
      setPath(pathname);
    }
  }, [location.pathname]);

  return (
    <section>
      <h1 className="text-white">Search</h1>
    </section>
  );
}
