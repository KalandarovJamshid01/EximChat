import "./userInfo.css";
import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.withCredentials = true;
// import { useContext, useEffect, useState } from "react";
export default function UserInfo({ infoId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getInfo = async (req, res, next) => {
      if (infoId[1] == "user") {
        var config = {
          method: "get",
          url: "http://localhost:8000/api/v1/admins/" + infoId[0],
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        };
        const res = await axios(config);
        console.log(res);
        setUser(res.data);
      } else {
        var config = {
          method: "get",
          url: "http://localhost:8000/api/v1/user/" + infoId[0],
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        };
        const res = await axios(config);
        console.log(res);
        setUser(res.data);
      }
    };
    getInfo();
  }, [infoId]);

  return (
    <>
      <div className="userInfo">
        <p className="chatOnlineFriend">Name: {user?.CN || user.firstname}</p>
        <p className="chatOnlineFriend">Phone: {user?.phone}</p>
        <div className="chatOnlineImg">{user?.photo}</div>
      </div>
    </>
  );
}
