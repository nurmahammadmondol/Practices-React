import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navber/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
