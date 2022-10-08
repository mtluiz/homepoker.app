import create from "zustand";

const useSelectedStore = create((set) => ({
  selected: "default",
  selectCreate: () => set(() => ({selected: "create"})),
  selectWelcome: () => set(() => ({selected: "welcome"})),
  selectJoin: () => set(() => ({selected: "join"})),
  selectDefault: () => set(() => ({selected: "default"})),
}))

export default useSelectedStore;