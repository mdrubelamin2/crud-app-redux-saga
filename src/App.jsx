import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen	">
      <div className="card w-96 bg-base-100 shadow-xl p-2">
        <h1 className='text-xl'>User List</h1>
        <AddUser />
        <UserList />
      </div>
    </div>
  );
}

export default App;
