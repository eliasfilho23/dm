import { create } from "zustand";

export interface Tournament {
  name: string;
  playerAmount: number;
  place: string;
  category: string;
}
export interface Stats {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  admin: boolean;
}
interface AppData {
  admin: boolean;
  logged: boolean;
  currentPlayer: Stats;
  players: Stats[];
  books: string[];
  subscribedTournaments: string[];
  createdTournaments: Tournament[];
  createTournament: (newTournamentData: Tournament) => void;
  uploadBook: (newBook: string) => void;
  subscribeOnTournament: (tournament: string) => void;
  registerPlayer: (player: Stats) => void;
  setSession: () => void;
}

const useAppData = create<AppData>()((set) => ({
  admin: false,
  logged: false,
  books: [],
  players: [],
  createdTournaments: [],
  subscribedTournaments: [],
  currentPlayer: {
    email: "",
    password: "",
    name: "",
    phone: "",
    city: "",
    admin: true,
  },
  setSession: () => set(() => ({ logged: true })),
  createTournament: ({ name, playerAmount, place, category }) =>
    set((state) => ({
      createdTournaments: [
        ...state.createdTournaments,
        { name, playerAmount, place, category },
      ],
    })),
  registerPlayer: (newPlayer: Stats) =>
    set((state) => ({
      players: [...state.players, newPlayer],
      currentPlayer: newPlayer,
    })),
  subscribeOnTournament: (tournament) =>
    set((state) => ({
      subscribedTournaments: [...state.subscribedTournaments, tournament],
    })),
  uploadBook: (book) =>
    set((state) => ({
      books: [...state.books, book],
    })),
}));

export default useAppData;
