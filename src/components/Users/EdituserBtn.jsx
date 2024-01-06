import { useState } from "react"
import { useDispatch } from "react-redux"

export default function EditUserItem({ editModeUserId, setEditModeUserId, user }) {
  const [username, setUsername] = useState(user.name)
  const dispatch = useDispatch()

  const handleUpdateBtnClick = () => {
    dispatch({ type: 'UPDATE_USER', payload: { user: { ...user, name: username } } })
    setUsername('')
    setEditModeUserId(0)
  }

  const handleEditBtnClick = () => {
    setEditModeUserId(user.id)
    setUsername(user.name)
  }

  return (
    <>
      {editModeUserId !== user.id && (
        <button className="btn btn-info btn-xs" type="button" onClick={handleEditBtnClick}>
          Edit
        </button>
      )}
      {editModeUserId === user.id && (
        <>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="input input-sm input-bordered w-240" />
          <button type="button" className="btn btn-info btn-xs" onClick={handleUpdateBtnClick}>
            Update
          </button>
        </>
      )}
    </>
  )
}