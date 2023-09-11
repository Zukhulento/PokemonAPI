import { create } from "zustand";

const usePokemonStore = create((set) => ({
  searchTerm: "",
  responseData: null,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setResponseData: (data) => set({ responseData: data }),
}));
export default usePokemonStore;
