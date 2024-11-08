import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserDetails = ({ details }) => {
  const { id, username, phone, email, website } = details;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border">
        <figure>
          <img
            className="h-full"
            src="https://i.ibb.co.com/M2pJycZ/download-2.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <div>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <div className="card-actions justify-end mt-4">
              <Link to={`/details/${id}`}>
                <button className="btn btn-outline btn-accent">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  details: PropTypes.object,
};
export default UserDetails;
