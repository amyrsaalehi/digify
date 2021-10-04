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
  const user = users.find(user => user.name === form.name && user.phone == form.phone)

  console.log('user', user)

  return { user }
}

export const signUp = (storage, form) => {
  if (!storage) {
    console.log('Localstorage not found!')
    return null;
  }

  if (!storage.getItem(USERS)) {
    storage.setItem(USERS, JSON.stringify([]))
  }

  const users = JSON.parse(storage.getItem(USERS))
  const user = users.find(user => user.name === form.name || user.phone == form.phone)

  if (!user) {
    window.localStorage.setItem(USERS, JSON.stringify([...users, { id: users.length + 1, enterExits: [], ...form }]))
  }

  return { user }
}

export const login = (storage, form) => {
  if (!storage) {
    console.log('Localstorage not found!')
    return null;
  }

  if (!storage.getItem(USERS)) {
    storage.setItem(USERS, JSON.stringify([]))
  }

  const users = JSON.parse(storage.getItem(USERS))
  const user = users.find(user => user.name === form.name && user.phone == form.phone)

  return { user }
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

export const changeUser = (storage, user) => {
  if (!storage) {
    console.log('Localstorage not found!')
    return;
  }
  if (!storage.getItem(USERS)) {
    storage.setItem(USERS, JSON.stringify([]))
  }
  let users = JSON.parse(storage.getItem(USERS))
  const userIndex = users.findIndex(u => u.id === user.id)

  users[userIndex] = user;

  localStorage.setItem(USERS, JSON.stringify(users))
}