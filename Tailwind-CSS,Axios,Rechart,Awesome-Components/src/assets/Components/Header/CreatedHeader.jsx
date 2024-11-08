import { useState } from 'react';
import { IoReorderThree, IoCloseSharp } from 'react-icons/io5';

const CreatedHeader = () => {
  const routes = [
    { id: 1, path: '/', component: 'Home', exact: true, title: 'Home Page' },
    { id: 2, path: '/about', component: 'About', title: 'About Us' },
    { id: 3, path: '/services', component: 'Services', title: 'Our Services' },
    { id: 4, path: '/contact', component: 'Contact', title: 'Contact Us' },
    {
      id: 5,
      path: '/profile/:username',
      component: 'Profile',
      title: 'User Profile',
    },
  ];

  const [Open, setOpen] = useState(false);

  return (
    <div className="bg-slate-500 p-4 md:flex justify-between items-center">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Navbar</h2>
        </div>

        <div onClick={() => setOpen(!Open)} className="text-4xl md:hidden">
          {Open ? <IoCloseSharp /> : <IoReorderThree />}
        </div>
      </div>
      <div>
        <ul
          className={`md:flex gap-6 duration-1000 absolute md:static  right-4  bg-slate-400 md:bg-slate-500 rounded-md ${
            Open ? 'mt-4' : '-top-60'
          }`}
        >
          {routes.map(route => (
            <li
              key={route.id}
              className="py-2 px-4 text-black  hover:bg-slate-700 hover:text-white"
            >
              <a href={`route.path`}>{route.component}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreatedHeader;
