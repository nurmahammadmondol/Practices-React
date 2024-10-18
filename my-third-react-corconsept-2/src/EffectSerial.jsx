export default function SerialDetails({ friend }) {
  console.log(friend);
  const { id, name, email, phone } = friend;
  return (
    <div className="InnerBox">
      <p>Id : {id}</p>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
    </div>
  );
}
