const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function fetchUsers() {
  try {
    const res = await fetch(USERS_API_URL);
    const users = await res.json();
    return users;
  } catch (e) {
    console.error('Error', e);
    return e.message
  }
}

export async function addUser(username) {
  const res = await fetch(USERS_API_URL, {
    method: 'POST',
    body: JSON.stringify({
      name: username,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const addedUser = await res.json()
  return addedUser
}

export async function deleteUser(userId) {
  const res = await fetch(`${USERS_API_URL}/${userId}`, {
    method: 'DELETE'
  })
  const deletedUser = await res.json()
  return deletedUser
}

export async function editUser(user) {
  const { id, name } = user
  const res = await fetch(`${USERS_API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const updatedUser = await res.json()
  return updatedUser
}