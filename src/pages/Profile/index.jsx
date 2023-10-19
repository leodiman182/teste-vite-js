/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMount } from "../../hooks/useIsMount";
import { AppContext } from "../../context/AppContext";
import MainSection from "../../layout/MainSection";

export default function Profile() {
  const location = useLocation();
  const { setPath, profile } = useContext(AppContext);
  const { name, image, email } = profile;
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      const { pathname } = location;
      setPath(pathname);
    }
  }, [location.pathname]);
  return (
    <MainSection>
      <h2 className="text-primary-color py-[10px] text-[24px]">Meu Perfil</h2>
      <article className="bg-primary-color-dark h-[350px] rounded py-[30px] px-[30px]">
        <div className="flex flex-col items-center justify-around h-full">
          <img
            className="rounded-full w-[120px] border-2 border-primary-color"
            src={image}
            alt={`${name} profile pic`}
          />
          <div>
            <p className="text-light-color font-bold text-[20px]">{name}</p>
            <p className="text-[12px] text-primary-color">{email}</p>
          </div>
        </div>
      </article>
    </MainSection>
  );
}
