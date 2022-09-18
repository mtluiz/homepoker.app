import create from "zustand";

const useSelectedStore = create((set) => ({
  selected: "default",
  selectCreate: () => set((state) => ({selected: "create"})),
  selectWelcome: () => set((state) => ({selected: "welcome"})),
  selectJoin: () => set((state) => ({selected: "join"})),
  selectDefault: () => set((state) => ({selected: "default"})),
}))

export default useSelectedStore;