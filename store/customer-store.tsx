import { create } from "zustand";

type Customer = {
  name: string;
  email: string;
  img_url?: string;
};

type CustomerStore = {
  customer: Customer | null;
  setCustomer: (customer: Customer) => void;
  clearCustomer: () => void;
};

export const useCustomerStore = create<CustomerStore>((set) => ({
  customer: null,

  setCustomer: (customer) => set({ customer }),

  clearCustomer: () => set({ customer: null }),
}));
