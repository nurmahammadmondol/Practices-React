import { useLoaderData, useNavigate } from 'react-router-dom';

const UserAllDetails = () => {
  const AllDetails = useLoaderData();
  // console.log(AllDetails);
  const { id, name, phone, email, website, username, address, company } =
    AllDetails;

  const BackPage = useNavigate();

  const GoBack = () => {
    BackPage(-1);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold mt-6">User All Details :</h2>

      <div className="flex justify-center items-center mb-10">
        <div className="card glass w-[450px]">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co.com/M2pJycZ/download-2.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold ">
              {name} <span className="text-[10px]"> ({id})</span>
            </h2>
            <p className="text-xl font-semibold">{username}....</p>
            <p>Phone : {phone}</p>
            <p>Email : {email}.</p>
            <p>Website : {website}.</p>
            <p>Address : {address.city}.</p>
            <p>Company Name : {company.name}. </p>
            <p>Company CatchPhrase: {company.catchPhrase}.</p>
            <p>Company BS : {company.bs}.</p>

            <div className="card-actions justify-end mt-3">
              <button onClick={GoBack} className="btn btn-accent">
                Back !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAllDetails;
