import { create } from 'zustand'

const useUserStore = create((set) => ({
    username: '',
    setUsername: (username) => set((state) => ({ username })),
}))
export default useUserStore;