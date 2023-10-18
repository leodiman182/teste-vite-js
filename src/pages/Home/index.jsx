/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMount } from "../../hooks/useIsMount";
import { AppContext } from "../../context/AppContext";
import MainSection from "../../layout/MainSection";

export default function Home() {
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
    <MainSection>
      <p>Home</p>
    </MainSection>
  );
}
