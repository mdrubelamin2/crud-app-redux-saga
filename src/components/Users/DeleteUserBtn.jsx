import { useDispatch } from "react-redux"

export default function DeleteUserBtn({ userId }) {
  const dispatch = useDispatch()
  return (
    <button className="btn btn-xs btn-error" type="button" onClick={() => dispatch({ type: 'DELETE_USER', payload: { userId } })}>Delete</button>
  )
}