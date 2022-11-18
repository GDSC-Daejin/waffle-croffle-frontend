import { atom } from 'recoil';

export const addTodo = atom({
  key: 'addTodo',
  default: []
})

export const viewTodo = atom({
  key: 'viewTodo',
  default: []
})