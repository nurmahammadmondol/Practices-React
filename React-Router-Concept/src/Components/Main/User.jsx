import { useLoaderData } from 'react-router-dom';
import UserDetails from './UserDetails';

const User = () => {
  const users = useLoaderData();
  // console.log(users);

  return (
    <div className="my-20">
      <h3 className="text-3xl font-bold mb-8">
        <span className="text-accent"> U</span>sers Details
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {users.map(user => (
          <UserDetails key={user.id} details={user}></UserDetails>
        ))}
      </div>
    </div>
  );
};

export default User;
