import "./Header.css";
import { Navigation } from "./_component/Navigation/Navigation";
import { ROUTES } from "../../data/routes";

export const Header = () => {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <Navigation navItems={ROUTES} />
    </header>
  );
};
