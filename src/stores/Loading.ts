/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LoadingModel, UseLoadingProps } from "../types/LoadingTypes";

export const useIsLoading = create<UseLoadingProps>()(
  persist(
    (set) => ({
      isLoading: {
        isLoading: false,
      },
      setIsLoading: (isLoading: LoadingModel) => set({ isLoading }),
    }),
    {
      name: "isloading-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: ({ isLoading, setIsLoading }: UseLoadingProps) => ({
        isLoading,
        setIsLoading,
      }),
    }
  )
);
