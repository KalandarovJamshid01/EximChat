import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(
      (m) => m !== currentUser.data._id
    );
    const getUser = async () => {
      try {
        var config = {
          method: "get",
          url: "http://localhost:8000/api/v1/admins/" + friendId,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2NlMTIwNGFkZTUzZWIxMDNkZjAyMiIsImlhdCI6MTY3NTE4MTUzNSwiZXhwIjoxNjc1MjI0NzM1fQ.uGhTRttfcfCeh6YjhcRJTjC3WudUxv3yXkCOPrjqYJk",
            Cookie:
              "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2NlMTIwNGFkZTUzZWIxMDNkZjAyMiIsImlhdCI6MTY3NTE4MTUzNSwiZXhwIjoxNjc1MjI0NzM1fQ.uGhTRttfcfCeh6YjhcRJTjC3WudUxv3yXkCOPrjqYJk",
          },
        };

        const res = await axios(config);

        setUser(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <div className="conversation">
      <img className="conversationImg" src={user?.photo  } alt="" />
      <span className="conversationName">{user?.firstName}</span>
    </div>
  );
}
