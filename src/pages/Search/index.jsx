/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMount } from "../../hooks/useIsMount";
import { AppContext } from "../../context/AppContext";
import SearchInput from "../../components/SearchInput";
import MainSection from "../../layout/MainSection";

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
    <MainSection>
      <h3 className="text-light-color py-[16px]">
        Encontre aqui o que você procura
      </h3>
      <SearchInput />
    </MainSection>
  );
}
