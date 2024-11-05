import { create } from "zustand";

export interface Tournament {
  name: string;
  id?: number;
  playerAmount: number;
  place: string;
  category: string;
  paid: boolean;
  value?: string;
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
  logged: boolean;
  currentPlayer: Stats;
  players: Stats[];
  books: string[];
  subscribedTournaments: Tournament[];
  createdTournaments: Tournament[];
  createTournament: (newTournamentData: Tournament) => void;
  uploadBook: (newBook: string) => void;
  subscribeOnTournament: (tournament: Tournament) => void;
  registerPlayer: (player: Stats) => void;
  setSession: () => void;
  endSession: () => void;
}

const useAppData = create<AppData>()((set) => ({
  logged: false,
  books: [],
  players: [],
  createdTournaments: [
    {
      name: 'Campeonato Sub-20',
      playerAmount: 13,
      id: 20,
      place: 'casa da mae joana',
      category: 'porrada',
      paid: true,
      value: '20',
    }
  ],
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
  endSession: () => set(() => ({
    logged: false,
    currentPlayer: {
      name: '',
      email: '',
      password: '',
      phone: '', 
      city: '',
      admin: false,
    }
  })),
  createTournament: (tournament) =>
    set((state) => ({
      createdTournaments: [...state.createdTournaments, tournament],
    })),
  registerPlayer: (newPlayer: Stats) =>
    set((state) => ({
      players: [...state.players, newPlayer],
      currentPlayer: newPlayer,
    })),
  subscribeOnTournament: (tournament: Tournament) =>
    set((state) => ({
      subscribedTournaments: [...state.subscribedTournaments, tournament],
    })),
  uploadBook: (book) =>
    set((state) => ({
      books: [...state.books, book],
    })),
}));

export default useAppData;
