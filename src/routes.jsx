import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import BottomNav from "./layout/BottomNav";

export default function Routing() {
  return (
    <BrowserRouter>
      <main className="bg-dark-color w-full h-screen pt-[40px] pb-[70px] px-[24px] text-center font-mono">
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
