import { useState } from "react";

const Prefilledinput = () => {
  const [profile, setProfile] = useState({
    name: "vaishali",
    id: 1,
    city: "bhopal",
  });

  const Handleinput = (e) => {
    const { name, value } = e.target;

    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={Handleinput}
        />
        <p>name:{profile.name}</p>
      </div>

      <div>
        <input
          type="text"
          name="id"
          value={profile.id}
          onChange={Handleinput}
        />
        <p>id:{profile.id}</p>
      </div>

      <div>
        <input
          type="text"
          name="city"
          value={profile.city}
          onChange={Handleinput}
        />
        <p>city:{profile.city}</p>
      </div>
    </>
  );
};
export default Prefilledinput;
