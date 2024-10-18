import './CountBox.css';

export default function Details({ details }) {
  console.log(details);
  const { id, name, email, phone, website } = details;
  return (
    <div className="Box">
      <p>Id :{id}</p>
      <p>Name :{name}</p>
      <p>Email :{email}</p>
      <p>Phone :{phone}</p>
      <p>Website :{website}</p>
    </div>
  );
}
