import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import user from '../data/user';

export const types = { setName: "SET_NAME" }

const reducer = (state, { type, newName }) => {
  switch (type) {
    case types.setName:
      let user = state.user;
      user.name = newName;
      return { user };
    default:
      return state;
  }
}

export const useStore = create(devtools(persist(set => ({
  user,
  dispatch: args => set(state => reducer(state, args)),
}))))
