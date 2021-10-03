import { USERS } from '../constants/storage'

export const getUser = (storage, form) => {
  if (!storage) {
    console.log('Localstorage not found!')
    return null;
  }
  if (!storage.getItem(USERS)) {
    storage.setItem(USERS, JSON.stringify([]))
  }
  const users = JSON.parse(window.localStorage.getItem(USERS))
  const user = users.find(user => user.name === form.name)
  return { users, user }
}