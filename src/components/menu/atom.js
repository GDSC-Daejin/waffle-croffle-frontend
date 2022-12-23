import { atom, selector } from 'recoil';
import axios from 'axios';

export const categoryState = atom({
  key: 'categoryState',
  default: [],
});

export const categorySelector = selector({
  key: 'boardListSelector',
  get: async ({ get }) => {
    const response = await axios.get('http://localhost:9092/');
    console.log(response.data);
    return response.data;
  },
});
