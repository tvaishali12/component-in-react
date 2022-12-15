import { useState } from "react";
const Handleinput2 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  return (
    <>
      <div>
        <label htmlFor="">Name :</label>
        <input
          type="text"
          //   value={name}-----------
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="">email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>

      <p>Name : {name}</p>
      <p>Name : {email}</p>
    </>
  );
};
export default Handleinput2;
