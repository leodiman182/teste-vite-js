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

  console.log(email);

  useEffect(() => {
    if (isMount) {
      const { pathname } = location;
      setPath(pathname);
    }
  }, [location.pathname]);
  return (
    <MainSection>
      <article className="bg-primary-color-dark h-[275px] rounded py-[30px] px-[6px]">
        <div className="flex flex-row items-center justify-center">
          <img
            className="rounded-full w-[120px]"
            src={image}
            alt={`${name} profile pic`}
          />
        </div>
      </article>
    </MainSection>
  );
}
