import React, { useEffect, useState } from "react";
import "./User.css";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]);
      });
  }, [setUser]);
  console.log(user?.sectors?.join(" ,"));

  return (
    <div className="containerRefilled">
      <div className="userContainer">
        <div className="userInfoCard">
          <h1>User Info</h1>
          <form>
            <label>
              Name:
              <input type="text" name="name" value={user.name} />
            </label>
            <label>
              Sectors:
              <input
                type="text"
                name="sectors"
                value={user?.sectors?.join(" ,")}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
