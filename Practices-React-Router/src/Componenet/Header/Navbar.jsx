import { NavLink } from 'react-router-dom';
import { GiMeal } from 'react-icons/gi';
import './Header.css';

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center ">
      <div className="flex gap-6  ">
        <h2 className="text-4xl font-bold underline">Meal</h2>
        <span className="text-5xl font-bold text-accent">
          <GiMeal />
        </span>
      </div>

      <nav>
        <ul className="flex items-center gap-8">
          <NavLink to="/HomePage">Home</NavLink>
          <NavLink to="/User">User</NavLink>
          <NavLink to="/SelectBook">Select Book</NavLink>
          <NavLink to="/About">About</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
