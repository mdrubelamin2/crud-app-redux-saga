import { useState } from "react"
import { useDispatch } from "react-redux";

export default function AddUser() {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleOnClick = () => {
    if (username === '') return
    dispatch({ type: 'ADD_USER', payload: { username } })
    setUsername('')
  }

  return (
    <div className="join mb-1">
      <input className="input input-bordered join-item" type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
      <button className="btn join-item rounded-r-full" type="button" onClick={handleOnClick}>Add</button>
    </div>
  )
}