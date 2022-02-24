import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
  const [username, setUsername] = useState("");
  const [roomname, setRoomname] = useState("");

  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must!");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="homepage">
        <h1>Welcome to E2E ChatApp</h1>
        <input
          placeholder="Input your user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="Input the room name"
          value={roomname}
          onChange={(e) => setRoomname(e.target.value)}
        ></input>
        <Link to={`/chat/${roomname}/${username}`}>
          <button onClick={sendData}>Join</button>
        </Link>
      </div>
    </>
  );
}

export default Homepage;
