import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import user from '../data/user';

const useStore = create(devtools(persist((set, get) => ({
  user,
  theme: 'dark',
  setName: (name) => {
    let user = get().user
    user.name = name
    set({ user })
  }
}))));

export default useStore;
