const InputFrom = () => {
  const handelSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <div className="mt-10">
        <form onSubmit={handelSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <br />

          <input type="text" name="email" placeholder="Email" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default InputFrom;
