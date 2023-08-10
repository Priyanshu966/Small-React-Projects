import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

export default function Navbar() {
  const [user, setUser] = useState({ name: "Bob" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context Api</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}
