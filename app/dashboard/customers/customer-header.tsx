"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCustomerStore } from "@/store/customer-store";

export default function CustomerHeaderModal() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const customer = useCustomerStore((state) => state.customer);
  const clearCustomer = useCustomerStore((state) => state.clearCustomer);

  const id = searchParams.get("id");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!id) {
      clearCustomer();
    }
  }, [id, clearCustomer]);

  if (!mounted) return null;

  if (!customer) return null;

  const handleClose = () => {
    clearCustomer(); // 👈 removes modal
    router.push("/dashboard/customers");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl p-5 shadow-xl relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-gray-50">
          <Image
            src={customer.img_url || "/avatar.png"}
            alt={customer.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-semibold text-lg">{customer.name}</p>
            <p className="text-sm text-gray-500">{customer.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
