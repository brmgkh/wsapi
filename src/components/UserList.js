import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        margin: "20px auto",
      }}
    >
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
