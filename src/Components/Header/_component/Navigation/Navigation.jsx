export const Navigation = ({ navItems }) => (
  <nav>
    {navItems.map((navItem) => (
      <li key={navItem}>{navItem}</li>
    ))}
  </nav>
);
