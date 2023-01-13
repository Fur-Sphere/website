import { create } from "zustand";

const useWaitList = create((set) => ({
	joined: false,
	name: '',
	setJoinedTrue: () => set({ joined: true }),
	setName: (name) => set({ name: name })
}))

export default useWaitList