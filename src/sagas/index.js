import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { addUser, deleteUser, editUser, fetchUsers } from '../helpers/usersAsyncHelpers';
import { addNewUserSuccess, deleteUserSuccess, editUserSuccess, fetchUsersSuccess } from '../slices/users';

function* fetchUserSaga() {
  const users = yield call(fetchUsers);
  yield put(fetchUsersSuccess(users));
}

function* addUserSaga({ payload }) {
  const { username } = payload
  const addedUser = yield call(addUser, username)
  yield put(addNewUserSuccess(addedUser))
}

function* deleteUserSaga({ payload }) {
  const { userId } = payload
  yield call(deleteUser, userId)
  yield put(deleteUserSuccess(userId))
}

function* editUserSaga({ payload }) {
  const { user } = payload
  yield call(editUser, user)
  yield put(editUserSuccess(user))
}

export function* rootSaga() {
  yield all([
    yield takeLatest('FETCH_USER', fetchUserSaga),
    yield takeEvery('ADD_USER', addUserSaga),
    yield takeEvery('DELETE_USER', deleteUserSaga),
    yield takeEvery('UPDATE_USER', editUserSaga)
  ])
}
