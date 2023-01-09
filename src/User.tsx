import { useUsers } from "./hooks/useUsers";
import { FC, memo } from "react";

export const User: FC = memo(() => {
  const { users } = useUsers();
  console.log(users);

  return (
    <div>
      <h1>ユーザ一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
});
