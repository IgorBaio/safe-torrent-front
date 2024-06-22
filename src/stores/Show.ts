/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ShowModel, ShowRequestModel, UseShowProps } from "../types/ShowTypes";

export const useShow = create<UseShowProps>()(
  persist(
    (set) => ({
      show: {
        magnetsLinks: [],
        title: "",
      },
      setShow: (show: ShowModel) => set({ show }),
      showRequest: {
        url: "",
        img: "",
        name: ""
      },
      setShowRequest: (showRequest: ShowRequestModel) => set({ showRequest }),
    }),
    {
      name: "show-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: ({
        show,
        setShow,
        showRequest,
        setShowRequest,
      }: UseShowProps) => ({
        show,
        setShow,
        showRequest,
        setShowRequest,
      }),
    }
  )
);
