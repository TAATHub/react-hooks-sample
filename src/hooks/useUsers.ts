import { useState, useEffect } from "react";
import { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return { users };
};
