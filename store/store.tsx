import { create } from "zustand";
import { languageTR } from "./lang";
interface Store {
  //memberbar bölümü
  memberBarVisible: boolean;
  setMemberBarVisible: (bool: boolean) => void;
  memberBarSelectedUser: string;
  setMemberBarSelectedUser: (user: string) => void;
  //
  // DİL BÖLÜMÜ
  texts: any;
  setTexts: (object: any) => void;
  //----------
  movies: any;
  dialogStation: boolean;
  setDialogStation: (apiCall: boolean) => void;
  currentMovie: any;
  setMovies: (apiCall: any) => void;
  setCurrentMovie: (apiCall: any) => void;
}

const useStore = create<Store>()((set) => ({
  //memberbar bölümü
  memberBarVisible: false,
  setMemberBarVisible: (bool: boolean) => {
    set(() => ({
      memberBarVisible: bool,
    }));
  },
  memberBarSelectedUser: "",
  setMemberBarSelectedUser: (user: string) => {
    set(() => ({
      memberBarSelectedUser: user,
    }));
  },
  //
  // DİL BÖLÜMÜ
  texts: languageTR,
  setTexts: (object: any) => {
    set(() => ({
      texts: object,
    }));
  },
  // ----------
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
