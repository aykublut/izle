import { create } from "zustand";

interface Store {
  movies: any;
  dialogStation: boolean;
  setDialogStation: (apiCall: boolean) => void;
  currentMovie: any;
  setMovies: (apiCall: any) => void;
  setCurrentMovie: (apiCall: any) => void;
}

const useStore = create<Store>()((set) => ({
  movies: [],
  dialogStation: false,
  setDialogStation: (apiCall: boolean) => {
    set(() => ({
      dialogStation: apiCall,
    }));
  },
  currentMovie: null,
  setMovies: (apiCall) => {
    set(() => ({
      movies: apiCall,
    }));
  },
  setCurrentMovie: (payload: any) => {
    set(() => ({
      currentMovie: payload,
    }));
  },
}));

export default useStore;
