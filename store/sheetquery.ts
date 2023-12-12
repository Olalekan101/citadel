import { create } from "zustand";

interface MyStore {
  isLoading: boolean;
  error: any;
  sheetdata: any[];
  setSheetData: any;
  //   fetchData: () => Promise<void>;
}

export const useSheetQuery = create<MyStore>((set) => ({
  isLoading: false,
  error: null,
  sheetdata: [],
  setSheetData: (value: any) => set(() => ({ sheetdata: value })),
  //   fetchData: async () => {
  //     set({ isLoading: true });

  //     try {
  //       const res = await fetch("http://localhost:3000/api/gsheet/herosection");
  //       const data = await res.json();
  //       set({ data: data.map((x: any) => x), isLoading: false, error: null });
  //     } catch (error) {
  //       set({ error, isLoading: false });
  //     }
  //   },
}));
