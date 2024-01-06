import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteUserBtn from "./DeleteUserBtn";
import EditUserItem from "./EdituserBtn";

export default function UserList() {
  const [editModeUserId, setEditModeUserId] = useState(0)
  const users = useSelector((state) => state.users.usersList);
  const usersReversed = users.toReversed()

  return (
    <div>
      {
        usersReversed.map((user, index) => (
          <div key={`${user.id}-${index}`} className="flex flex-auto items-center gap-1 py-2 border-b last:border-0">
            {editModeUserId !== user.id && <span>{user.name}</span>}
            <EditUserItem user={user} editModeUserId={editModeUserId} setEditModeUserId={setEditModeUserId} />
            <DeleteUserBtn userId={user.id} />
          </div>
        ))
      }
    </div>
  )
}