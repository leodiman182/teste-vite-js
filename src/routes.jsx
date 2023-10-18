import { BrowserRouter, Routes as MyRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

export default function Routing() {
  return (
    <BrowserRouter>
      <MyRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </MyRoutes>
    </BrowserRouter>
  );
}
