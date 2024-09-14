import { create } from "zustand";
import { initialItems } from "../lib/constants.js";

export const useItemsStore = create((set) => ({
  items: initialItems,
  addItem: (item) => {
    set((state) => ({ items: [...state.items, item] }));
  },
  deleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  toggleCheckItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetAllItems: () => {
    set(() => ({ items: initialItems }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, packed: true }));
      return { items: newItems };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, packed: false }));
      return { items: newItems };
    });
  },
}));
