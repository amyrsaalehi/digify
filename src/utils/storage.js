import { USERS } from '../constants/storage'

export const getUser = (storage, form) => {
  if (!storage) {
    console.log('Localstorage not found!')
    return null;
  }
  if (!storage.getItem(USERS)) {
    storage.setItem(USERS, JSON.stringify([]))
  }
  const users = JSON.parse(storage.getItem(USERS))
  const user = users.find(user => user.name === form.name)
  return { users, user }
}

export const logout = (storage, userId) => {
  if (!storage) {
    console.log('Localstorage not found!')
    return;
  }
  if (!storage.getItem(USERS)) {
    return;
  }

  if (!userId) {
    console.log('No userId provided!');
    return;
  }

  let users = JSON.parse(storage.getItem(USERS))
  const userIndex = users.findIndex(user => user.id === parseInt(userId))
  users.splice(userIndex, 1)

  /*
    easier-approch:
      users.splice(userId - 1, 1)
  */

  storage.setItem(USERS, JSON.stringify(users))
  console.log('userLoggedOut')
}