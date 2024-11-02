import { create } from "zustand";

export interface Tournament {
  name: string;
  playerAmount: number;
  place: string;
  category: string;
}
interface AppData {
  admin: boolean;
  logged: boolean;
  stats: {
    name?: string;
    password: string;
    email: string;
    phone?: string;
    city?: string;
  };
  subscribedTournaments: string[];
  createdTournaments: Tournament[];
  createTournament: (newTournamentData: Tournament) => void;
  subscribeOnTournament: (tournament: string) => void;
  setUserAsAdmin: () => void;
  setSession: () => void;
  setStats: (email: string, password: string) => void;
}

const useAppData = create<AppData>()((set) => ({
  admin: false,
  logged: false,
  createdTournaments: [],
  subscribedTournaments: [],
  stats: {
    email: "",
    password: "",
    name: "",
    phone: "",
    city: "",
  },
  setUserAsAdmin: () => set(() => ({ admin: true })),
  setSession: () => set(() => ({ logged: true })),
  createTournament: ({name, playerAmount, place, category}) =>
    set((state) => ({
      createdTournaments: [
        ...state.createdTournaments,
        { name, playerAmount, place, category },
      ],
    })),
  subscribeOnTournament: (tournament) =>
    set((state) => ({
      subscribedTournaments: [...state.subscribedTournaments, tournament],
    })),
  setStats: (newEmail, newPassword) =>
    set((state) => ({
      stats: { ...state.stats, email: newEmail, password: newPassword },
    })),
}));

export default useAppData;
