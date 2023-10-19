import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import BottomNav from "./layout/BottomNav";
import { HomeButton } from "./components/HomeButton";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function Routing() {
  const { path } = useContext(AppContext);

  return (
    <BrowserRouter>
      <main
        className={
          path === "/"
            ? "pt-[40px] bg-dark-color w-full h-full pb-[70px] px-[24px] text-center font-mono"
            : "pt-[40px] bg-dark-color w-full h-screen pb-[70px] px-[24px] text-center font-mono"
        }
      >
        <HomeButton />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Router>
      </main>
      <BottomNav />
    </BrowserRouter>
  );
}
