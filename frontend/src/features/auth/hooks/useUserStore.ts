import { supabase } from "@/utils/supabase";
import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
  isUserLoggedIn: boolean;
  isLoadingUser: boolean;
  user: User | null | undefined;
  setUser: (_user: User | null | undefined) => void;
  setIsLoadingUser: (_isLoading: boolean) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isUserLoggedIn: !!localStorage.getItem("isSnippetUserLoggedIn"),
  user: null,
  isLoadingUser: false,
  setUser: (_user) =>
    set((state) => ({
      ...state,
      user: _user,
    })),
  setIsLoadingUser: (_isLoading) =>
    set((state) => ({
      ...state,
      isLoadingUser: _isLoading,
    })),
  logout: () => {
    supabase.auth.signOut();
    localStorage.removeItem("isSnippetUserLoggedIn");

    set((state) => ({
      ...state,
      user: null,
    }));
  },
}));
