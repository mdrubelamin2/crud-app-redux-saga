import { createSlice, createAction } from '@reduxjs/toolkit'
import { removeItemFromArray } from '../helpers/helpers'

const initialState = {
  usersList: [],
  isLoading: false,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersSuccess: (state, { payload: users }) => {
      state.usersList = users
    },
    addNewUserSuccess: (state, { payload: user }) => {
      const { usersList } = state
      state.usersList = [...usersList, user]
    },
    deleteUserSuccess: (state, { payload: userId }) => {
      const { usersList } = state
      const deletedUserIndex = usersList.findIndex(user => user.id === userId)
      if (deletedUserIndex === -1) return
      state.usersList = removeItemFromArray(usersList, deletedUserIndex)
    },
    editUserSuccess: (state, { payload: user }) => {
      const { usersList } = state
      const { id: userId } = user
      const editedUserIndex = usersList.findIndex(user => user.id === userId)
      if (editedUserIndex === -1) return
      state.usersList[editedUserIndex] = user
    }
  },
})

export const { fetchUsersSuccess, addNewUserSuccess, deleteUserSuccess, editUserSuccess } = userSlice.actions
export default userSlice.reducer
