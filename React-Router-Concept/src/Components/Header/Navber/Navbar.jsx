import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" py-6 bg-gray-500">
      <nav className="flex justify-between  items-center w-11/12 mx-auto">
        <h3 className="text-3xl font-bold">Online Shopping</h3>
        <ul className="flex gap-3">
          <Link className="px-4 py-2 hover:bg-gray-800 hover:text-white" to="/">
            Home
          </Link>
          <Link
            className="px-4 py-2 hover:bg-gray-800 hover:text-white"
            to="/User"
          >
            User
          </Link>
          <Link
            className="px-4 py-2 hover:bg-gray-800 hover:text-white"
            to="/About"
          >
            About
          </Link>
          <Link
            className="px-4 py-2 hover:bg-gray-800 hover:text-white"
            to="/ContactUS"
          >
            ContactUS
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
