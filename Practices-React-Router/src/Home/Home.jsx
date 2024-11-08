import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Componenet/Header/Navbar';

const Home = () => {
  const Navigation = useNavigation();

  return (
    <div>
      <div className="bg-slate-500 py-4">
        <Navbar></Navbar>
      </div>
      <div className="w-10/12 mx-auto my-16 min-h-screen ">
        {Navigation.state === 'loading' ? (
          <div className="flex justify-center items-center min-h-screen">
            <span class="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
    </div>
  );
};

export default Home;
